
import './control-drawer.scss'
import React, { ChangeEvent, useCallback } from 'react'
import SelectView, { SelectViewElement } from 'views/select/select'
import ValueView from 'views/value/value'
import {
  changeControlAction,
  changeControlValueToChoiceAction,
  changeControlValueToTypeAction,
} from 'slices/blueprint'
import { ControlNode } from 'types/control'
import { ProgramNode } from 'types/program'
import { ReactComponent as CopyIcon } from 'icons/copy.svg'
import { TypedValue } from 'types/value'
import { labelType } from 'slices/blueprint/reducers/value'
import { useAppDispatch } from 'utils/hooks'

export default function ControlDrawerView(props: {
  control: ControlNode
  program: ProgramNode
}) {
  const dispatch = useAppDispatch()
  const { control, program } = props
  const controlId = control.id
  const programId = program.id

  const onValueChange = useCallback((value: TypedValue, event: ChangeEvent) => {
    dispatch(changeControlAction({ controlId, change: { value } }))
  }, [dispatch, controlId])

  const onSelectChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value
    const type = value[0]
    const choiceIndex = parseInt(value.substring(1))
    switch (type) {
      case 'c':
        dispatch(changeControlValueToChoiceAction({
          controlId,
          choiceIndex,
        }))
        break
      case 't':
        const valueType = control.types[choiceIndex]
        dispatch(changeControlValueToTypeAction({
          controlId,
          valueType,
        }))
        break
    }
  }, [dispatch, controlId, programId])

  const selectElements: SelectViewElement[] = []
  let selectValue = undefined
  let selectLabel = undefined

  if (control.choices.length > 0) {
    selectElements.push({
      type: 'group',
      label: 'Known value',
      elements: control.choices.map((choice, index) => ({
        type: 'option',
        value: `c${index}`,
        label: choice.label,
      })),
    })
    if (control.selectedChoiceIndex !== undefined) {
      selectValue = `c${control.selectedChoiceIndex}`
      selectLabel = control.choices[control.selectedChoiceIndex].label
    }
  }

  if (!control.enforceChoices || control.choices.length === 0) {
    selectElements.push({
      type: 'group',
      label: 'Custom value',
      elements: control.types.map((type, index) => ({
        type: 'option',
        value: `t${index}`,
        label: labelType(type),
      })),
    })
    if (selectValue === undefined) {
      const typeIndex = control.types.findIndex(t => control.value.type === t)
      if (typeIndex !== -1) {
        selectValue = `t${typeIndex}`
        selectLabel = labelType(control.types[typeIndex])
      }
    }
  }

  const showValue =
    control.selectedChoiceIndex === undefined ||
    control.choices.length === 0

  return (
    <div className="control-drawer">
      {showValue && (
        <div className="control-drawer__value">
          <ValueView
            value={control.value}
            disabled={!control.writable}
            onChange={onValueChange}
          />
        </div>
      )}
      <div className="control-drawer__footer">
        <div className="control-drawer__select">
          <SelectView
            elements={selectElements}
            value={selectValue}
            valueLabel={selectLabel}
            onChange={onSelectChange}
            modifiers={['control-footer'].concat(showValue ? ['meta'] : [])}
          />
        </div>
        <button className="control-drawer__copy">
          <CopyIcon title="Copy" />
        </button>
      </div>
    </div>
  )
}