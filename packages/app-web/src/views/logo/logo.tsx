
import './logo.scss'
import { mulberry32 } from '../../utils/random'
import { shuffleArray } from '../../utils/array'
import { useState } from 'react'

const crossPath = 'M7.01444 8.83393L9.15162 11H11V9.15162L8.83393 6.98556L11 4.84838V3H9.15162L7.01444 5.16606L4.84838 3H3V4.84838L5.16606 6.98556L3 9.15162V11H4.84838L7.01444 8.83393Z'
const circlePath = 'M7 2.535C4.5361 2.535 2.536 4.54207 2.536 6.98546C2.536 9.42885 4.5361 11.465 7 11.465C9.46389 11.465 11.464 9.45794 11.464 6.98546C11.464 4.51298 9.43491 2.535 7 2.535Z'
const squarePath = 'M11 3H3V11H11V3Z'

export default function LogoView (props: {}): JSX.Element {
  const [seed, setSeed] = useState(0)
  const prng = mulberry32(seed)

  const positions = ['11,0', '22,0', '0,11', '0,22', '11,22', '22,22']
  shuffleArray(positions, prng)

  return (
    <button onClick={(evt) => setSeed(seed + 1)} className='logo'>
      <h1 className='logo__canvas'>
        <svg
          className='logo__svg'
          width='169'
          height='36'
          viewBox='0 0 169 36'
          role='img'
          aria-labelledby='app-logo-title'
        >
          <title id='app-logo-title'>ciphereditor</title>
          <path className='logo__svg-cross-1' transform={`translate(${positions[0]})`} d={crossPath} />
          <path className='logo__svg-cross-2' transform={`translate(${positions[1]})`} d={crossPath} />
          <path className='logo__svg-circle-1' transform={`translate(${positions[2]})`} d={circlePath} />
          <path className='logo__svg-circle-2' transform={`translate(${positions[3]})`} d={circlePath} />
          <path className='logo__svg-square-1' transform={`translate(${positions[4]})`} d={squarePath} />
          <path className='logo__svg-square-2' transform={`translate(${positions[5]})`} d={squarePath} />
          <path className='logo__svg-wordmark' fillRule='evenodd' clipRule='evenodd' d='M56.6462 11.0273C57.6456 11.0273 58.4558 10.2171 58.4558 9.21775C58.4558 8.21837 57.6456 7.4082 56.6462 7.4082C55.6468 7.4082 54.8367 8.21837 54.8367 9.21775C54.8367 10.2171 55.6468 11.0273 56.6462 11.0273ZM81.1404 12.6489C81.9729 12.6489 82.6687 12.815 83.2313 13.1475L83.231 13.1478C83.7932 13.4803 84.2139 13.9832 84.5007 14.6563C84.7849 15.3282 84.9268 16.1561 84.9268 17.1404V23.8783H81.9726V17.369C81.9726 16.8705 81.9046 16.4545 81.7653 16.122C81.6259 15.7896 81.4159 15.5467 81.1317 15.3934C80.8478 15.2413 80.4956 15.1717 80.0808 15.186C79.7483 15.186 79.4388 15.2386 79.1546 15.3422C78.8704 15.4457 78.629 15.595 78.4274 15.7896C78.2256 15.9827 78.0664 16.2043 77.9501 16.4542C77.8308 16.7041 77.7712 16.974 77.7712 17.2652V23.878H74.82V8.49056H77.7316V14.3189C77.7582 14.2846 77.7833 14.2496 77.8083 14.2146L77.8084 14.2146L77.8084 14.2145L77.8085 14.2144C77.8582 14.1451 77.9079 14.0756 77.9702 14.0108C78.3652 13.6019 78.8396 13.2723 79.3934 13.0224C79.9502 12.774 80.5325 12.6489 81.1404 12.6489ZM48.7239 15.227C48.1558 15.227 47.6529 15.3617 47.2183 15.6331C46.7808 15.9027 46.437 16.2736 46.1871 16.7451C45.9373 17.2166 45.8122 17.7576 45.8122 18.367C45.8122 18.9494 45.9428 19.4764 46.1985 19.9479C46.4542 20.4195 46.8035 20.7929 47.2494 21.0699C47.6924 21.3482 48.1895 21.4861 48.7463 21.4861C49.1041 21.4861 49.445 21.4378 49.7632 21.3412C50.084 21.2432 50.3851 21.0914 50.6693 20.884C50.9535 20.6751 51.2118 20.4253 51.4477 20.1341L53.0498 22.09C52.5925 22.6851 51.9451 23.168 51.1041 23.5345C50.2661 23.9024 49.3827 24.0857 48.4539 24.0857C47.4001 24.0857 46.4571 23.8358 45.6275 23.3372C44.795 22.8387 44.1391 22.1598 43.6617 21.2991C43.1815 20.4398 42.943 19.4628 42.943 18.3676C42.943 17.2724 43.1818 16.2954 43.6617 15.4361C44.1391 14.5769 44.7953 13.8965 45.6275 13.398C46.4571 12.8994 47.4001 12.6495 48.4539 12.6495C49.4397 12.6495 50.3403 12.8299 51.1582 13.1906C51.9762 13.5498 52.6126 14.0498 53.0699 14.6874L51.4479 16.6418C51.2548 16.3789 51.0134 16.1389 50.7207 15.9245C50.431 15.7101 50.1157 15.5397 49.7748 15.4146C49.4339 15.2895 49.0846 15.227 48.7239 15.227ZM55.1918 12.8779H58.1431V23.878H55.1918V12.8779ZM70.1845 13.4076C69.4347 12.9163 68.5824 12.6705 67.6251 12.6705C67.0029 12.6705 66.4066 12.7883 65.8382 13.0227C65.2702 13.2586 64.7957 13.5638 64.4124 13.9387C64.3553 13.9945 64.3126 14.0538 64.2699 14.1131C64.2467 14.1453 64.2235 14.1776 64.198 14.2092L64.1541 12.8776H61.3049V28.4526H64.2791V22.6432C64.2915 22.6567 64.3011 22.6708 64.3108 22.6849C64.3224 22.7017 64.334 22.7186 64.3501 22.7345C64.7448 23.1365 65.2306 23.4588 65.8074 23.7003C66.3813 23.9431 66.989 24.0653 67.6254 24.0653C68.5827 24.0653 69.4349 23.8181 70.1848 23.3268C70.9318 22.834 71.5229 22.1592 71.9516 21.2985C72.3807 20.4392 72.5965 19.4622 72.5965 18.367C72.5965 17.2579 72.3807 16.2776 71.9516 15.4242C71.5226 14.5719 70.9318 13.9003 70.1848 13.4073L70.1845 13.4076ZM69.3721 20.0204C69.1362 20.4992 68.8125 20.8697 68.3951 21.1324C67.9803 21.3965 67.5003 21.5271 66.9604 21.5271C66.4066 21.5271 65.9208 21.3965 65.5061 21.1324C65.0884 20.8697 64.7646 20.4989 64.529 20.0204C64.2934 19.5419 64.1738 18.9907 64.1738 18.367C64.1738 17.7434 64.2931 17.1925 64.529 16.7137C64.7649 16.2349 65.0886 15.8687 65.5061 15.6115C65.9208 15.3559 66.4066 15.2267 66.9604 15.2267C67.5143 15.2267 67.9971 15.3588 68.4064 15.6214C68.8154 15.8855 69.1365 16.2535 69.3721 16.7236C69.608 17.1951 69.7273 17.7434 69.7273 18.3667C69.7273 18.9901 69.608 19.5413 69.3721 20.0201V20.0204ZM96.3522 14.1987C95.8891 13.706 95.3382 13.3209 94.6988 13.044C94.0624 12.767 93.3695 12.6277 92.6196 12.6277C91.8157 12.6277 91.0716 12.7697 90.3869 13.0539C89.6995 13.3392 89.1058 13.7397 88.6087 14.261C88.1087 14.7808 87.7195 15.3931 87.444 16.1002C87.1657 16.8076 87.0263 17.5915 87.0263 18.4508C87.0263 19.5459 87.2736 20.516 87.7649 21.361C88.2562 22.2075 88.9493 22.8721 89.8441 23.3579C90.7388 23.8437 91.7813 24.0851 92.9745 24.0851C93.4745 24.0851 93.9801 24.0226 94.4914 23.8975C95.0057 23.7739 95.5028 23.5891 95.9883 23.3463C96.474 23.1048 96.9171 22.8023 97.3205 22.4431L95.906 20.4675C95.4487 20.8409 95.0197 21.1051 94.6162 21.2572C94.2157 21.4105 93.7698 21.4858 93.2869 21.4858C92.5795 21.4858 91.966 21.3508 91.4462 21.0809C90.9264 20.8095 90.523 20.432 90.2391 19.9477C90.0785 19.6736 89.975 19.3639 89.9054 19.0328H97.7356L97.7583 18.1169C97.7839 17.3414 97.673 16.6171 97.4232 15.9437C97.1759 15.2718 96.8182 14.6895 96.3522 14.1982V14.1987ZM94.9714 17.1404V17.2239H89.9267C89.9808 16.9856 90.0474 16.7585 90.1454 16.5578C90.3671 16.1005 90.6908 15.7538 91.114 15.5182C91.5373 15.2826 92.0515 15.1645 92.6621 15.1645C93.0769 15.1645 93.4518 15.2511 93.784 15.4245C94.1165 15.5993 94.3919 15.8335 94.6078 16.1319C94.8207 16.4301 94.9429 16.7669 94.9714 17.1404ZM104.524 13.0437C105.03 12.781 105.561 12.6489 106.115 12.6489C106.351 12.6489 106.581 12.6702 106.803 12.7115C107.024 12.7528 107.212 12.8011 107.362 12.8563L106.572 16.1002C106.419 16.0179 106.223 15.944 105.982 15.8815C105.737 15.8204 105.493 15.7893 105.243 15.7893C104.911 15.7893 104.601 15.8474 104.317 15.9652C104.033 16.083 103.786 16.2494 103.578 16.4638C103.371 16.6796 103.206 16.9324 103.09 17.2236C102.971 17.5147 102.914 17.833 102.914 18.1794V23.8777H99.9396V12.8776H102.789L102.841 14.688C102.952 14.4989 103.063 14.3102 103.203 14.1359C103.578 13.6714 104.019 13.3078 104.524 13.0437ZM117.27 14.261C116.833 13.7965 116.313 13.4314 115.711 13.1687C115.109 12.9061 114.438 12.774 113.705 12.774C112.927 12.774 112.209 12.916 111.541 13.2002C110.876 13.4843 110.305 13.8834 109.825 14.396C109.348 14.9088 108.979 15.508 108.715 16.1942C108.451 16.8803 108.32 17.6471 108.32 18.4921C108.32 19.5873 108.556 20.5573 109.027 21.4038C109.499 22.2488 110.152 22.9079 110.99 23.378C111.831 23.8495 112.791 24.0854 113.871 24.0854C114.424 24.0854 114.967 24.013 115.493 23.8666C116.021 23.7218 116.504 23.5272 116.95 23.2843C117.393 23.0429 117.774 22.7616 118.092 22.4434L117.282 21.32C116.671 21.8328 116.115 22.1764 115.609 22.3497C115.101 22.5231 114.592 22.6098 114.078 22.6098C113.206 22.6098 112.462 22.4364 111.845 22.09C111.226 21.7435 110.751 21.2549 110.419 20.6242C110.135 20.0852 109.998 19.4465 109.956 18.7423H118.529L118.549 18.0136C118.578 17.2509 118.481 16.5508 118.259 15.9129C118.038 15.2764 117.708 14.7255 117.271 14.261H117.27ZM116.969 17.431H110.007C110.079 16.9455 110.189 16.4961 110.376 16.1214C110.683 15.5106 111.118 15.0504 111.689 14.738C112.257 14.4271 112.927 14.2709 113.706 14.2709C114.37 14.2709 114.941 14.4157 115.421 14.7069C115.899 14.9981 116.271 15.3759 116.532 15.8402C116.796 16.3047 116.941 16.7861 116.969 17.2861V17.431ZM129.128 14.7591C128.864 14.3785 128.532 14.0381 128.128 13.7397C127.728 13.4428 127.273 13.2101 126.768 13.0437C126.262 12.8773 125.739 12.7938 125.197 12.7938C124.228 12.7938 123.353 13.0367 122.578 13.5225C121.799 14.0082 121.183 14.6758 120.726 15.5292C120.268 16.3815 120.041 17.3556 120.041 18.4508C120.041 19.5317 120.265 20.4989 120.717 21.3511C121.166 22.2034 121.782 22.8721 122.566 23.3579C123.35 23.8437 124.233 24.0851 125.219 24.0851C125.745 24.0851 126.253 24.0028 126.747 23.8352C127.239 23.6691 127.679 23.4405 128.065 23.1493C128.455 22.8582 128.775 22.5301 129.034 22.1621C129.053 22.1344 129.067 22.1061 129.081 22.0778C129.093 22.055 129.104 22.0322 129.118 22.0097L129.148 23.8777H130.687V8.49056H129.128V14.7591ZM127.382 22.1095C127.95 21.7502 128.396 21.2502 128.722 20.6126V20.612C129.049 19.9741 129.211 19.2472 129.211 18.429C129.211 17.6107 129.049 16.8862 128.722 16.2558C128.396 15.6255 127.95 15.1269 127.382 14.759C126.813 14.391 126.169 14.2078 125.447 14.2078C124.7 14.2078 124.044 14.391 123.481 14.759C122.922 15.1266 122.476 15.6252 122.152 16.2558C121.825 16.8865 121.663 17.611 121.663 18.429C121.663 19.233 121.823 19.9543 122.141 20.5922C122.459 21.2301 122.902 21.7313 123.473 22.0993C124.041 22.4672 124.7 22.6505 125.447 22.6505C126.169 22.6505 126.813 22.4701 127.382 22.1095ZM135.699 13.0227H134.139V23.878H135.699V13.0227ZM140.604 10.175H142.164V13.0227H144.908V14.521H142.164V23.878H140.604V14.521H138.15V13.0227H140.604V10.175ZM154.332 13.5225C153.494 13.0367 152.539 12.7938 151.474 12.7938C150.392 12.7938 149.432 13.0367 148.594 13.5225C147.753 14.0082 147.097 14.6729 146.617 15.5179C146.139 16.3643 145.901 17.3274 145.901 18.4083C145.901 19.5035 146.139 20.482 146.617 21.3412C147.097 22.2005 147.753 22.8724 148.594 23.3582C149.432 23.844 150.392 24.0854 151.474 24.0854C152.539 24.0854 153.494 23.844 154.332 23.3582C155.17 22.8724 155.828 22.2008 156.309 21.3412C156.786 20.482 157.025 19.5035 157.025 18.4083C157.025 17.3274 156.786 16.3646 156.309 15.5179C155.829 14.6729 155.17 14.0082 154.332 13.5225ZM154.903 20.5614C154.57 21.192 154.107 21.6906 153.511 22.0583C152.914 22.4248 152.235 22.6095 151.474 22.6095C150.71 22.6095 150.028 22.4248 149.426 22.0583C148.821 21.6903 148.349 21.1917 148.011 20.5614C147.671 19.9308 147.509 19.212 147.523 18.4083C147.509 17.6186 147.671 16.9086 148.011 16.2779C148.349 15.6473 148.821 15.1546 149.426 14.8009C150.028 14.4472 150.71 14.2712 151.474 14.2712C152.235 14.2712 152.914 14.4472 153.511 14.8009C154.107 15.1546 154.57 15.6432 154.903 16.2666C155.238 16.8914 155.403 17.6046 155.403 18.4083C155.403 19.212 155.238 19.9308 154.903 20.5614ZM164.24 12.7938C164.475 12.7938 164.697 12.8124 164.907 12.8465L164.907 12.8462C165.115 12.8802 165.288 12.9259 165.427 12.9811L164.99 14.7281C164.808 14.6444 164.626 14.5862 164.438 14.5507C164.251 14.5167 164.075 14.4995 163.907 14.4995C163.436 14.4995 163.013 14.5818 162.641 14.7494C162.266 14.9158 161.947 15.1473 161.683 15.4454C161.419 15.7436 161.218 16.0874 161.081 16.4752C160.942 16.8629 160.871 17.2791 160.871 17.7221V23.8777H159.291V13.0224H160.851L160.882 15.1511C161.031 14.8064 161.213 14.4736 161.464 14.1673C161.805 13.7511 162.209 13.4186 162.68 13.1687C163.152 12.9189 163.671 12.7938 164.24 12.7938ZM136.093 9.59124C136.093 10.2454 135.563 10.7757 134.909 10.7757C134.255 10.7757 133.724 10.2454 133.724 9.59124C133.724 8.93708 134.255 8.40678 134.909 8.40678C135.563 8.40678 136.093 8.93708 136.093 9.59124Z' />
        </svg>
      </h1>
    </button>
  )
}