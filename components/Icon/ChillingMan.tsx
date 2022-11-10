import * as React from 'react';
import Svg, {
  Circle,
  Path,
  G,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
import {BaseIconProps} from './Index';

const ChillingMan = ({
  width = 173,
  height = 173,
  ...otherProps
}: BaseIconProps) => (
  <Svg width={width} height={height} fill="none" {...otherProps}>
    <Circle
      opacity={0.5}
      cx={186.5}
      cy={186.5}
      r={186.5}
      fill="url(#a)"
      fillOpacity={0.2}
    />
      <Path
        fill="#FFF"
        d="M112 251H1V1h238v250H112m1.374-57.128c.273-.112.472-.3 1.423-.739 1.398-.056 2.797-.113 5.063-.015 2.05-.057 4.101-.113 6.992.005 1.71-.069 3.42-.137 5.63.002.169.066.337.133 1.201.644h77.951c-3.032-2.393-7.627 1.867-7.359-3.877-.09.037-.182.074-.961.222-1.402.964-2.805 1.928-4.385 2.366-.094-.16-.187-.32-.176-1.257.038-1.037.076-2.073.545-3.713.308-1.177 1.189-2.615.798-3.474-.69-1.52-2.154-2.689-3.048-4.607-.559-4.268-2.98-1.847-5.364-.785-2.208.378-4.416.755-6.703.365-1.07-.076-2.139-.15-3.436-.693-1.736.445-3.464.917-5.209 1.32-.748.173-1.53.2-2.595-.341-.573-1.733-1.145-3.465-1.006-5.326 4.996-2.944 10.182-5.612 14.954-8.883 18.427-12.63 26.953-37.938 20.204-59.12-6.706-21.042-20.483-35.177-41.23-42.67-26.607-9.611-53.472-4.492-70.958 20.48-8.214 11.731-18.67 19.52-32.342 23.296-4.475 1.236-8.977 2.464-13.31 4.106-11.135 4.22-19.298 11.584-20.865 23.828-1.491 11.652 3.26 21.328 12.37 29.642.448 1.79.895 3.581 1.335 6.176 2.693 5.794 5.385 11.588 8.01 18.033-.19 1.267-.383 2.533-.64 4.232h-8.279l.011.885c23.343 0 46.686 0 70.498.015 0 0 .47-.032.881-.117M82.542 92.014c1.172-1.384 3.104-2.646 3.35-4.178.437-2.73.86-6.45-.589-8.212-1.43-1.74-5.975-2.995-7.781-1.991-7.453 4.138-14.51 9.044-21.41 14.081-1.518 1.109-3.047 4.951-2.404 5.718 1.484 1.77 4.32 3.41 6.566 3.357 8.1-.189 15.502-2.86 22.268-8.775z"
        opacity="1"
      ></Path>
      <Path
        fill="#C4E7E7"
        d="M41.286 163.996c-8.838-7.662-13.59-17.338-12.098-28.99 1.567-12.244 9.73-19.608 20.865-23.828 4.333-1.642 8.835-2.87 13.31-4.106 13.673-3.777 24.128-11.565 32.342-23.295 17.486-24.973 44.35-30.092 70.959-20.482 20.746 7.494 34.523 21.629 41.229 42.671 6.75 21.182-1.777 46.49-20.204 59.12-4.772 3.271-9.958 5.939-15.617 8.786-1.893-1.41-3.121-2.722-4.277-4.485.123-7.154.173-13.859.531-20.746 3.07-1.906 5.514-2.011 8.526-.092 1.65 1.052 4.892 1.173 6.604.233 3.476-1.907 6.547-3.162 10.691-2.176 4.263 1.015 6.839-2.733 5.1-7.01-1.415-6.422-9.065-9.005-15.662-4.695-1.858 1.678-3.39 3.276-5.22 4.846-.633-.92-.966-1.812-1.325-2.726-.027-.021-.01.046.271-.028.613-.676.943-1.279 1.448-2.217 2.304-1.859 4.311-3.606 6.596-4.837 2.068-1.115 4.44-1.668 6.99-2.348 4.51-.412 8.686-.98 10.838-5.799.497-.932.748-1.682 1.255-2.724 3.09-7.349 1.626-10.963-5.537-14.487-.733-.358-1.316-.445-2.237-.556-3.85 1.854-7.361 3.734-11.064 5.727-.437.292-.624.519-1.124.897-2.25.807-4.129 1.513-6.068 2.011-.062-.206-.492-.192-.823-.316-4.161-.93-7.48-.664-9.057 3.577-.404-7.627-.335-14.948-.738-22.243-.086-1.564-1.877-3.034-3.342-4.608-15.86-.067-31.261-.14-46.66.01-1.825.018-3.638 1.264-5.554 2.176-.07.403-.042.57-.072 1.072-.024.786.01 1.237-.03 2.012-.027.764.019 1.202.01 2.107-.12 5.82-.186 11.176-.438 16.5-.185-.033-.56-.079-.601-.43-.58-1.87-1.117-3.388-1.557-5.235.766-9.513-5.514-15.513-15.83-15.238-1.155.612-1.955 1.258-3.07 2.07-3.868 3.365-4.858 6.793-1.424 10.762 3.145 3.633 5.418 7.372 4.936 12.733-.31 3.459 2.179 6.716 6.024 7.303 3.828.584 7.782.344 11.75.906.137 9.355.206 18.27.217 27.434-.009.412.04.575.018 1.05-.104.525-.136.737-.57.887a2049.427 2049.427 0 01-18.956-3.097c-3.09-.737-5.809-1.358-8.556-2.351-.472-1.204-.916-2.033-1.357-2.864-2.29-4.31-4.58-8.618-6.558-13.105 1.811-5.352 3.906-10.457 4.524-15.735.258-2.209-2.1-5.791-4.226-6.884-1.8-.925-5.046.647-7.528 1.483-1.645.555-3.07 1.761-4.93 2.693-5.27-.406-6.81 3.503-9.349 6.7-2.11-.022-3.788-.21-5.413.006-4.46.593-9.409 1.097-10.742 6.329-1.142 4.478 2.949 6.496 5.809 8.883.25.209.449.478.424.977-4.51 8.362-3.663 17.107-3.453 25.772m52.238-30.02l-3.733 4.033c1.67.676 3.601 1.628 3.696 1.47 1.297-2.147 2.34-4.448 3.445-6.712l-1.053-.623c-.624.452-1.248.903-2.355 1.832z"
        opacity="1"
      ></Path>
      <Path
        fill="#FDC459"
        d="M41.422 164.322c-.346-8.991-1.194-17.736 3.546-26.024.796-.041.993.2 1.055.947 1.26 3.735 2.399 7.123 3.832 10.382 2.865 6.51 7.673 10.072 15.31 9.526 1.11.094 1.985.024 3.295-.001 2.754.004 5.075-.037 7.683.172 2.819.704 5.35 1.157 8.095 1.8.736.386 1.261.581 1.997 1.04 2.055 1.64 3.9 3.019 5.749 4.733 2.211 1.92 4.24 4.408 6.665 4.883 3.903.765 8.067.202 12.31.552.554 2.455.92 4.56 1.103 6.943-.522 1.075-.863 1.872-1.497 2.827-2.735 3.022-5.178 5.886-7.989 8.873-3.765.725-7.164 1.329-10.675 1.728-.307-.46-.558-.634-.924-1.064-7.638-9.33-17.638-11.638-28.778-10.62-7.255.662-12.407-2.777-16.691-8.13-.806-1.007-1.735-1.915-2.607-2.87-.448-1.79-.895-3.58-1.479-5.697m41.014-.597c-4.339-.729-8.685-1.7-12.79.098l19.263 7.347c.55-4.198-2.425-5.82-6.473-7.445z"
        opacity="1"
      ></Path>
      <Path
        fill="#C6E8E8"
        d="M82.28 92.271c-6.504 5.658-13.905 8.33-22.006 8.518-2.246.053-5.082-1.587-6.566-3.357-.643-.767.886-4.61 2.404-5.718 6.9-5.037 13.957-9.943 21.41-14.081 1.806-1.004 6.35.25 7.781 1.991 1.449 1.763 1.026 5.483.589 8.212-.246 1.532-2.178 2.794-3.613 4.435z"
        opacity="1"
      ></Path>
      <Path
        fill="#FAA838"
        d="M42.897 170.422c.876.552 1.805 1.46 2.61 2.467 4.285 5.353 9.437 8.792 16.692 8.13 11.14-1.018 21.14 1.29 28.305 10.63-9.558.35-18.704.294-27.847.396-2.243.026-4.48.569-7.026.77-1.758-1.606-3.21-3.107-4.661-4.608-2.692-5.795-5.384-11.589-8.073-17.785z"
        opacity="1"
      ></Path>
      <Path
        fill="#C89657"
        d="M196.801 180.031c1.14 1.316 2.605 2.485 3.295 4.005.391.86-.49 2.297-1.411 3.798-4.473.933-8.334 1.543-12.194 2.153l.284 2.086c3.08 0 6.161 0 9.231.224-.01.225-.03.674-.486.74-4.136.016-7.817-.036-11.507-.396a14.833 14.833 0 00-.665-1.93c-.464.764-.927 1.527-1.776 2.366-1.429.03-2.472-.018-3.471-.425.628-1.89 1.211-3.422 1.81-5.356.485-3.209-.377-4.712-3.545-4.377-.793.083-1.666-.583-2.468-1.252.069-.81.105-1.274.141-1.738.767-.093 1.549-.12 2.297-.293 1.745-.403 3.473-.875 5.37-.789.717 1.363 1.272 2.195 1.827 3.026l1.527-2.096c2.208-.378 4.416-.755 7.191-1.386 1.896.377 3.223 1.009 4.55 1.64z"
        opacity="1"
      ></Path>
      <Path
        fill="#F8C459"
        d="M173.89 179.612c.113.781.077 1.245-.3 2.186-1.396 2.394-2.45 4.31-3.753 6.422-1.091 1.39-1.935 2.582-3.201 3.798-3.101.315-5.78.607-8.602.628-.7-.469-1.256-.666-2.015-1.13-2.513-2.702-4.822-5.139-7.27-7.939-3.063-9.547 4.843-14.845 13.374-16.17 1.086.627 2.026.966 3.23 1.42.966.413 1.667.711 2.369 1.01 1.229 1.313 2.457 2.625 3.994 4.1.88 1.893 1.452 3.625 2.174 5.675m-21.515 3.088c1.495 4.326 5.247 6.857 9.065 6.556 2.604-.205 5.496-3.51 7.245-6.11 2.233-3.32.753-7.205-2.05-9.366-2.677-2.062-6.363-2.813-10.574-4.537-1.492 4.809-2.717 8.757-3.686 13.457z"
        opacity="1"
      ></Path>
      <Path
        fill="#FAF7EE"
        d="M158.176 192.916c2.68-.291 5.359-.583 8.811-.745 2.497-.23 4.222-.59 5.946-.95l-2.849-3.198c1.055-1.916 2.11-3.831 3.473-5.877 1.143.19 2.016.856 2.809.773 3.168-.335 4.03 1.168 3.228 4.467-.76.588-1.187.684-1.871.778-.473.252-.69.507-1.2.93-.902 1.332-1.51 2.496-2.252 3.918h3.785c1.044.047 2.087.094 3.86.11 1.189-.08 1.647-.126 2.106-.172 3.68.051 7.362.103 11.886.156 1.629-.032 2.414-.066 3.199-.1 1.402-.964 2.805-1.928 4.55-2.949.343-.057.34-.059.34-.059.01 5.638 4.605 1.378 7.637 3.77-26.75 0-52.35 0-77.839-.318 8.202-.39 16.292-.462 24.381-.534z"
        opacity="1"
      ></Path>
      <Path
        fill="#6B514E"
        d="M126.012 192.948c-2.05.057-4.101.113-6.641-.248-1.205-.892-1.92-1.364-2.585-2.2.78-1.378 1.51-2.393 2.266-3.083.528 1.224 1.029 2.123 1.881 3.654l1.404-3.833 6.056 2.143-.732-5.534a164.494 164.494 0 014.738-1.826c1.972-.403 3.532-.77 5.113-.988 3.418-.468 4.211.9 2.278 3.817-3.176 1.35-6.053 2.734-9.218 4.293-1.711 1.385-3.136 2.595-4.56 3.805z"
        opacity="1"
      ></Path>
      <Path
        fill="#FAF7EE"
        d="M50.937 188.532c1.484 1.176 2.936 2.677 5.164 4.363 12.489.126 24.2.07 35.913.012 3.398-.603 6.797-1.207 10.65-1.534 3.354.75 6.253 1.223 9.212 1.683.06-.012.062.111.094.312.032.2.054.606.054.606H41.995l-.01-.885h8.278c.257-1.7.45-2.965.674-4.557z"
        opacity="1"
      ></Path>
      <Path
        fill="#F7C860"
        d="M196.017 192.073h-9.242l-.284-2.086c3.86-.61 7.72-1.22 11.978-1.852.36 1.015.322 2.051-.095 3.493-1.039.419-1.698.432-2.357.445z"
        opacity="1"
      ></Path>
      <Path
        fill="#9D444C"
        d="M158.034 192.646c-7.947.342-16.037.414-24.587.582-.628.03-.796-.037-1.236-.392-.272-.29-.313-.66.163-.712 8.267-.149 16.057-.245 23.848-.342.556.198 1.112.395 1.812.864z"
        opacity="1"
      ></Path>
      <Path
        fill="#724848"
        d="M131.898 192.176s.04.37.062.556c-1.688.254-3.398.322-5.528.303 1.004-1.297 2.429-2.507 4.143-3.538.634 1.012.979 1.846 1.323 2.679z"
        opacity="1"
      ></Path>
      <Path
        fill="#FDC459"
        d="M185.02 179.393c-.469 1.083-.978 1.781-1.487 2.48-.555-.831-1.11-1.663-1.712-2.792 1.021-.223 2.09-.148 3.2.312z"
        opacity="1"
      ></Path>
      <Path
        fill="#F2B781"
        d="M196.925 179.73c-1.451-.33-2.778-.962-4.423-1.624 1.566-.524 3.987-2.945 4.423 1.624z"
        opacity="1"
      ></Path>
      <Path
        fill="#724848"
        d="M116.735 190.863c.716.473 1.43.945 2.202 1.76-1.343.397-2.742.454-4.8.507-.822.062-.985.126-1.402.097-.436-.082-.616-.07-.797-.06 0 0-.002-.123.014-.362.096-.394.176-.55.608-.69 1.627-.407 2.901-.83 4.175-1.252z"
        opacity="1"
      ></Path>
      <Path
        fill="#BC8A53"
        d="M196.006 192.297c.67-.237 1.33-.25 2.316-.28.42.143.513.303.696.726-.696.297-1.481.33-2.655.296-.388-.068-.367-.517-.357-.742z"
        opacity="1"
      ></Path>
      <Path
        fill="#FAF7EE"
        d="M204.001 190.001c.092-.035.183-.072.135-.056-.139.053-.136.055-.135.056z"
        opacity="1"
      ></Path>
      <Path
        fill="#F9FBF8"
        d="M111.97 193.368c.149-.212.33-.223.758.018.248.253.234.571.234.571s-.47.032-.704.025c-.234-.008-.256-.413-.288-.614z"
        opacity="1"
      ></Path>
      <Path
        fill="#FAF7EE"
        d="M113.168 193.915c-.206.042-.192-.276-.185-.435.17-.224.332-.288.742-.264.12.355-.078.544-.557.699z"
        opacity="1"
      ></Path>
      <Path
        fill="#CB505D"
        d="M165.088 168.712c-.94-.339-1.879-.678-2.595-1.546.318-22.514.464-44.499.388-66.483-.005-1.419-1.726-2.833-2.903-4.604-2.904-.119-5.553.118-8.517.47-.972.044-1.629-.027-2.446-.406-.837-.1-1.513.107-2.449.422-.618.027-.975-.055-1.607-.503-5.624-.6-10.972-.957-16.322-.989-1.62-.01-3.245.884-5.216 1.48-1.313.045-2.278-.025-3.403-.404-.838-.103-1.516.102-2.508.48-1.111 1.777-2.465 3.334-2.598 4.99-.356 4.42-.187 8.883-.365 13.438-.176.22-.276.36-.24.437.093.2.245.375.42 1.022-.038 13.838-.125 27.214-.481 40.546-.93-.633-1.588-1.223-2.247-1.812.032-.211.064-.423.298-1.047.36-.752.264-1.015-.09-1.2-.07-8.915-.138-17.83-.204-27.678a4622.95 4622.95 0 00-.113-12.346c.066-5.356.132-10.711.44-16.687.12-1.173-.002-1.725-.125-2.277-.034-.45-.067-.901.093-1.773.404-.728.35-.995.034-1.22 1.818-.678 3.63-1.924 5.456-1.942 15.399-.15 30.8-.077 46.746.383a83.92 83.92 0 011.024 12.723c.13 20.877.205 41.754.245 62.632.002 1.297-.466 2.596-.715 3.894M135.854 92.01l-3.308.576.156.762h11.68l-.023-1.339-8.505.001z"
        opacity="1"
      ></Path>
      <Path
        fill="#FDFDFD"
        d="M75.855 159.074c-2.32.041-4.64.082-7.435-.287-2.415-4.134-3.96-8.142-6.388-11.516-3.798-5.282-4.08-8.187.131-13.537.515-.485.867-.704 1.59-.944 1.937-.28 3.504-.538 5.398-.826 1.16-.787 1.994-1.544 2.863-2.333l3.843 4.319 6.87 12.927c.442.83.886 1.66 1.278 3.202-2.75 3.473-5.45 6.234-8.15 8.995z"
        opacity="1"
      ></Path>
      <Path
        fill="#54BA91"
        d="M111.704 112.946c.224 3.837.263 7.642.23 11.939-3.97.371-7.924.61-11.752.027-3.845-.587-6.335-3.844-6.024-7.303.482-5.36-1.791-9.1-4.936-12.733-3.434-3.969-2.444-7.397 1.805-10.734 1.46-.136 2.223-.133 2.979-.137-.007-.006-.02-.021.04.24.364.43.666.6.961.762-.007-.007-.018-.022.008.348 1.727 5.735 3.429 11.1 4.967 15.95 0-.008.087-.657.502-1.241 2.556 1.67 4.783 3.277 7.181 5.008l-2.607 2.209c5.005 1.968 5.226-1.43 5.95-4.295a7.67 7.67 0 00.136-.118s.375.046.56.078m-11.185 1.598c-.108.22-.243.433-.306.665-.018.067.17.19.265.288.107-.22.214-.439.041-.953z"
        opacity="1"
      ></Path>
      <Path
        fill="#53BC91"
        d="M192.032 127.47c-2.237.801-4.609 1.354-6.677 2.469-2.285 1.231-4.292 2.978-6.803 4.974-.763 1.034-1.143 1.594-1.523 2.154 0 0-.016-.067-.361-.066-1.823-1.402-3.302-2.806-4.707-4.56 1.399-4.052 2.725-7.752 4.045-11.447-.006.006-.018.019.228-.064.424-.37.6-.655.772-.936-.006.006-.018.016.32-.007 1.475-.685 2.613-1.346 3.905-2.107.002-.344-.15-.588-.3-.822.001.012-.026.035-.051-.326-1.005-1.662-1.984-2.963-2.964-4.264 0 0 .43-.014.904.22 2.576.029 6.077 3.093 6.03-2.14.126-.277.313-.504.95-.485 1.754.969 3.118 1.74 4.49 2.517l1.689-3.616 5.024 2.49v-7.405c.582.087 1.165.174 1.917.922.193 2.53.97 5.443.097 6.075-2.582 1.869-5.795 2.886-8.801 4.14-1.91.797-3.89 1.423-5.84 2.126l.526 1.286 10.362 1.215-3.232 7.657z"
        opacity="1"
      ></Path>
      <Path
        fill="#F9FBF8"
        d="M62 134c-4.047 5.084-3.766 7.989.032 13.27 2.427 3.375 3.973 7.383 5.953 11.472-.835.435-1.71.505-2.907.077-4.64-8.838-9.259-16.891-19.043-19.98-.074-.34-.27-.582-.819-.8-.452-.314-.651-.583-.901-.792-2.86-2.387-6.951-4.405-5.81-8.883 1.334-5.232 6.283-5.736 10.743-6.33 1.625-.216 3.304-.027 5.372.368.466 1.134.517 1.876.345 2.919-2.74 1.314-5.257 2.328-7.774 3.343l.074 1.301c1.571.358 3.143.715 5.005 1.34 2.44.457 4.59.648 6.8 1.17 1.017.728 1.974 1.126 2.93 1.524z"
        opacity="1"
      ></Path>
      <Path
        fill="#FAFCFC"
        d="M76.17 133.772c-1.556-1.22-2.8-2.617-4.156-4.141-.87.79-1.702 1.546-2.958 2.077-.676-.713-.93-1.2-1.028-1.971.407-.873.66-1.463.91-2.197-.003-.145.068-.426.379-.604 2.817-2.468 4.512-4.986 2.774-9.442-1.776 1.975-3.049 3.392-4.554 4.632-.675-.54-1.117-.905-1.513-1.657-.529-1.977-1.104-3.567-1.679-5.157 1.524-.915 2.95-2.121 4.595-2.676 2.482-.836 5.729-2.408 7.528-1.483 2.127 1.093 4.484 4.675 4.226 6.884-.618 5.278-2.713 10.383-4.524 15.735z"
        opacity="1"
      ></Path>
      <Path
        fill="#724848"
        d="M111.596 155.189c1.062.65 1.72 1.24 2.805 2.154 1.375 1.447 2.325 2.568 2.904 3.674-2.076-.285-3.78-.554-4.814-.718-.171 2.761-.324 5.232-.74 7.525a74.088 74.088 0 01-3.859-4.045c-.316-.498-.585-.683-1.28-.736-1.777.346-3.193.652-4.666.62-1.103-.647-2.147-.956-3.192-1.265.081.86.163 1.72.241 2.91-.002.767-.001 1.205-.334 1.7-.778 0-1.223-.058-1.702-.445-1.54-3.752-3.246-2.146-4.954-.394a6.621 6.621 0 01-.025.392c-1.845-1.378-3.69-2.756-5.753-4.622-.218-.488-.224-.937.152-1.102 5.33-.682 10.282-1.198 15.534-1.746l-.271-3.681-.876.998-7.752-4.199c6.06.973 12.12 1.946 18.582 2.98z"
        opacity="1"
      ></Path>
      <Path
        fill="#54BC92"
        d="M199.222 139.895c1.764 3.978-.812 7.726-5.075 6.711-4.144-.986-7.215.269-10.691 2.176-1.712.94-4.953.819-6.604-.233-3.012-1.92-5.456-1.814-8.567-.25-.3-.857-.249-1.554.096-2.275.74-.36 1.187-.695 1.626-1.028-.008.002-.02.015.443.026 3.531.001 6.616.165 9.66-.114 1.007-.092 1.91-1.326 2.759-2.182-.357-.007-.612.13-1.112.302-.244.033-.734.082-.864-.238-.829-1.218-1.528-2.116-2.228-3.014 1.53-1.599 3.062-3.197 5.137-4.637 2.32.577 5.09.435 5.698 1.512 2.415 4.28 5.802 4.235 9.722 3.244m-13.583.34c-.198.298-.397.595-.613 1.453l2.24-.461c-.37-.39-.738-.78-1.627-.992z"
        opacity="1"
      ></Path>
      <Path
        fill="#54BA91"
        d="M192.345 127.591c.638-2.374 1.59-4.627 2.919-7.778l-10.362-1.215-.526-1.286c1.95-.703 3.93-1.33 5.84-2.126 3.006-1.254 6.22-2.271 8.801-4.14.873-.632.096-3.544.054-5.804 6.993 2.863 8.458 6.477 5.286 13.477-1.14-.25-1.941-.444-2.743-.637l1.323 3.893c-1.906 4.635-6.083 5.204-10.592 5.616m5.857-8.982l.013-1.184c-.164-.001-.47-.014-.47-.003-.031.393-.033.788.457 1.187z"
        opacity="1"
      ></Path>
      <Path
        fill="#654544"
        d="M168.087 146.05a34.28 34.28 0 00-.11 2.43c-.01 7.048-.06 13.753-.182 20.907-.775.151-1.476-.147-2.442-.56-.016-1.413.452-2.712.45-4.01-.04-20.877-.116-41.754-.245-62.631-.026-4.09-.313-8.18-.565-12.662.92 1.12 2.71 2.59 2.797 4.154.403 7.295.334 14.616.665 22.632.064 6.41-.104 12.114-.351 18.128-.064.732-.049 1.156-.067 1.972-.01 3.134.014 5.874-.017 8.871-.015.427.026.598.067.768z"
        opacity="1"
      ></Path>
      <Path
        fill="#7B4B4B"
        d="M92.641 152.092c2.957 1.517 5.54 2.916 8.125 4.316l.876-.998.271 3.681c-5.252.548-10.205 1.064-15.674 1.522a12.351 12.351 0 00-2.213.32c-2.532-.452-5.064-.905-7.883-1.609 2.412-3.011 5.111-5.772 7.89-8.872 2.8.282 5.517.903 8.608 1.64z"
        opacity="1"
      ></Path>
      <Path
        fill="#54BA91"
        d="M168.184 134.13c.167-5.706.335-11.41.575-17.504 1.345-4.946 4.665-5.211 8.826-4.282 1.31 1.425 2.29 2.726 2.975 4.406a95.426 95.426 0 01-3.572 3.26s.012-.01-.244.044c-.423.356-.59.658-.756.959 0 0 .012-.013-.34.012-2.123 4.01-3.893 7.996-5.655 11.98.01-.003.014-.021-.24.073-.692.414-1.13.732-1.57 1.051zM94.073 92.079c9.959-.31 16.239 5.69 15.357 15.297-.213.421-.43.624-.82.617-3.096-.002-5.802.003-8.546-.407-.39-2.804-.742-5.195-.715-7.58 1.921.283 3.463.56 5.256.883-2.283-5.518-3.78-6.273-6.963-3.896-1.056-.78-1.855-1.394-2.653-2.008 0 0 .011.015-.063-.225-.363-.42-.652-.598-.94-.776 0 0 .013.015.013-.301.025-.746.05-1.175.074-1.604z"
        opacity="1"
      ></Path>
      <Path
        fill="#654544"
        d="M64.01 115.33c.91 1.572 1.485 3.162 1.68 5.283-1.765 2.626-3.066 4.782-4.578 6.778-.525.692-1.576.987-2.486 1.191-1.212-1.368-2.325-2.465-3.437-3.56a39.146 39.146 0 01-.113-2.602c2.125-3.588 3.665-7.497 8.934-7.09z"
        opacity="1"
      ></Path>
      <Path
        fill="#56BE94"
        d="M168.075 145.024c-.024-2.74-.048-5.48.255-8.75a88.03 88.03 0 001.677-3.29s-.005.018.308.047c.733-.06 1.153-.15 1.573-.24 1.478 1.404 2.957 2.808 4.807 4.232.704.912 1.037 1.804 1.67 2.724 1 .927 1.7 1.825 2.264 3.284-3.638 1.034-7.14 1.507-10.641 1.98 0 0 .01-.013-.304-.04-.746 0-1.177.027-1.609.053zM199.246 139.596c-3.944 1.29-7.331 1.335-9.746-2.945-.608-1.077-3.378-.935-5.372-1.592 6.054-4.468 13.704-1.885 15.118 4.537z"
        opacity="1"
      ></Path>
      <Path
        fill="#54BA91"
        d="M196.664 104.025c.339 2.215.339 4.406.339 7.428-2.254-1.116-3.463-1.715-5.024-2.49l-1.689 3.617c-1.372-.777-2.736-1.548-4.3-2.631 3.313-2.19 6.824-4.07 10.674-5.924z"
        opacity="1"
      ></Path>
      <Path
        fill="#C6E8E8"
        d="M93.766 133.738c.865-.69 1.489-1.142 2.113-1.594l1.053.623c-1.106 2.264-2.148 4.565-3.445 6.713-.095.157-2.027-.795-3.696-1.47 1.591-1.72 2.662-2.877 3.975-4.272z"
        opacity="1"
      ></Path>
      <Path
        fill="#53BC91"
        d="M203.183 121.792c-.687-1.115-1.128-2.412-1.569-3.71.802.193 1.604.386 2.487.929-.17 1.099-.42 1.849-.918 2.781z"
        opacity="1"
      ></Path>
      <Path
        fill="#54BA91"
        d="M184.476 110.65c.421 5.13-3.08 2.067-5.594 2.245 1.465-.733 3.343-1.439 5.594-2.246zM109.333 107.704c.653 1.425 1.19 2.943 1.77 4.813.041.351-.05.43-.363.252-.79-1.71-1.265-3.24-1.74-4.769 0 0 .217-.203.333-.296z"
        opacity="1"
      ></Path>
      <Path
        fill="#93D7B9"
        d="M93.716 92.044c.332.464.308.893.29 1.645-.756.32-1.519.317-2.663.287.418-.674 1.218-1.32 2.373-1.932z"
        opacity="1"
      ></Path>
      <Path
        fill="#56BE94"
        d="M177.311 136.993c.098-.486.478-1.046 1.066-1.743-.123.464-.453 1.067-1.066 1.743z"
        opacity="1"
      ></Path>
      <Path
        fill="#CB6470"
        d="M112.132 94.34c.196.227.318.779.253 1.486-.234-.284-.28-.722-.253-1.486zM112.234 91.256c.415-.009.468.258.122.651-.164-.08-.192-.248-.122-.65zM112.15 153.252c.41-.064.508.199.218.638-.179-.063-.228-.226-.219-.638z"
        opacity="1"
      ></Path>
      <Path
        fill="#FAAA3B"
        d="M46.023 139.245c9.796 2.683 14.414 10.736 18.821 19.41-7.316 1.044-12.124-2.517-14.989-9.028-1.433-3.259-2.572-6.647-3.832-10.382z"
        opacity="1"
      ></Path>
      <Path
        fill="#724848"
        d="M131.997 182.125l-4.336 1.722.732 5.534-6.056-2.143-1.404 3.833c-.852-1.531-1.353-2.43-2.004-4.026-1.9-1.425-3.648-2.153-5.398-2.881l-1.288-5.168c-.365-2.104-.73-4.209-1.354-6.917-.58-1.024-.903-1.444-.918-2.003.896-.456 1.486-.773 2.286-.98.473.305.655.56.497 1.101-1.251 7.121 4.637 9.71 8.368 13.47 1.375 1.386 4.193 1.679 5.007-1.95 1.014-.712 1.892-1.141 2.807-1.36.223.63.408 1.05 1.208 1.557 1.028.127 1.44.169 1.853.21z"
        opacity="1"
      ></Path>
      <Path
        fill="#F3A439"
        d="M109.663 170.216c.323.42.646.839 1.037 1.511-3.984.255-8.148.818-12.051.053-2.424-.475-4.454-2.963-6.665-4.883-.004-.336.02-.597.375-.644 1.781.182 3.208.41 4.635.639.444.058.889.115 2.046.147 4.874-1.616 7.762.74 10.623 3.177z"
        opacity="1"
      ></Path>
      <Path
        fill="#FDE8A8"
        d="M82.828 163.832c3.656 1.518 6.63 3.14 6.08 7.338l-19.262-7.347c4.105-1.798 8.451-.827 13.182.009z"
        opacity="1"
      ></Path>
      <Path
        fill="#F9FBF8"
        d="M112.207 192.1c-.08.155-.159.311-.315.718-2.975-.222-5.874-.696-8.86-1.567 2.355-3.263 4.798-6.127 7.727-8.768.806 3.355 1.127 6.486 1.448 9.617z"
        opacity="1"
      ></Path>
      <Path
        fill="#CA545F"
        d="M112.56 192.115c-.674-3.146-.995-6.277-1.51-9.789.149-1.179.49-1.976 1.012-3.051.613 1.451 1.044 3.181 1.47 4.889 1.75.728 3.498 1.456 5.37 2.556-.607 1.387-1.336 2.402-2.116 3.78-1.325.786-2.599 1.208-4.226 1.615z"
        opacity="1"
      ></Path>
      <Path
        fill="#E3973C"
        d="M91.901 192.703c-11.6.261-23.311.318-35.493.296 1.769-.385 4.006-.928 6.249-.954 9.143-.102 18.289-.046 27.906-.06.78.084 1.03.259 1.338.718z"
        opacity="1"
      ></Path>
      <Path
        fill="#693F3E"
        d="M84.238 161.124c.353-.317.92-.443 1.625-.345.14.223.146.672.154.897-.518.029-1.043-.166-1.78-.552z"
        opacity="1"
      ></Path>
      <Path
        fill="#BC8A53"
        d="M178.101 192.652c-1.158.36-2.27.36-3.83.36.742-1.422 1.35-2.586 2.489-3.97.84-.353 1.07-.572 1.219-.875a60.77 60.77 0 001.6-.379c-.267 1.442-.85 2.973-1.478 4.864zM184.013 192.64c-.45.356-.908.403-1.711.405.119-.807.582-1.57 1.046-2.333.219.54.438 1.08.665 1.929z"
        opacity="1"
      ></Path>
      <Path
        fill="#FDFDFD"
        d="M132.4 182.021c-.816.062-1.228.02-2.139-.312-.675-.774-.852-1.257-.696-1.922 4.438-2.978 1.437-4.727-.744-6.927-2.271-2.526-4.413-4.74-6.674-7.241a12.217 12.217 0 00-1.993-1.81c-.032.06.105.073.01-.215-.415-.528-.735-.767-1.141-1.235-.087-.23-.512-.474-.545-.617-.14-.331-.303-.424-.536-.546-.016-.126-.266-.164-.266-.164-.95-1.121-1.9-2.242-3.005-3.645-.069-13.657.018-27.033.136-41.147-.019-.924-.07-1.108-.122-1.293.04-4.445-.129-8.908.227-13.328.133-1.656 1.487-3.213 2.988-4.9 1.228-.144 1.753-.203 2.278-.261.965.07 1.93.14 3.685.193 7.649-.085 14.51-.154 21.37-.222.358.081.715.163 1.722.222a42.62 42.62 0 002.22-.2c.657.07 1.314.142 2.752.197 3.288-.083 5.797-.148 8.305-.214.923 1.416 2.644 2.83 2.649 4.25.076 21.983-.07 43.968-.535 66.194-8.754 1.854-16.66 7.152-13.965 16.88-2.918.739-5.606.933-8.293 1.126 1.635-2.951.842-4.319-2.576-3.85-1.58.216-3.14.584-5.113.987m-13.28-39.18c.53.353 1.06 1.01 1.593 1.014 11.646.082 23.296.216 34.935-.076 1.19-.03 3.23-2.65 3.312-4.154.364-6.637-.035-13.312.224-19.958.166-4.258-1.701-5.57-5.624-5.527-9.65.11-19.304-.042-28.954.099-1.686.025-3.359.966-5.7 1.887-.016 8.648-.032 17.295.214 26.715z"
        opacity="1"
      ></Path>
      <Path
        fill="#FDE8A8"
        d="M152.247 182.324c1.097-4.324 2.322-8.272 3.814-13.081 4.211 1.724 7.897 2.475 10.573 4.537 2.804 2.16 4.284 6.047 2.051 9.366-1.75 2.6-4.641 5.905-7.245 6.11-3.818.3-7.57-2.23-9.193-6.932m8.478-.693l-4.368 2.348c1.52.932 3.31 2.8 4.177 2.44 7.22-2.997.45-6.57-.323-10.394l4.15 1.69.61-.753-2.9-3.895c-5.082 2.805-5.205 3.562-1.346 8.564z"
        opacity="1"
      ></Path>
      <Path
        fill="#CC4C59"
        d="M139.79 184.85c2.985-.16 5.673-.353 8.73-.728 2.677 2.255 4.986 4.692 7.499 7.394-7.588.363-15.378.459-23.645.608-.82-.781-1.165-1.615-1.512-2.802 2.875-1.738 5.752-3.123 8.928-4.472z"
        opacity="1"
      ></Path>
      <Path
        fill="#FFF"
        d="M169.837 188.22c1.197.869 2.146 1.935 3.096 3-1.724.36-3.449.72-5.524.927.493-1.345 1.337-2.537 2.428-3.927z"
        opacity="1"
      ></Path>
      <Path
        fill="#C89657"
        d="M177.723 188.164c.106.306-.123.525-.67.71-.02-.203.197-.458.67-.71z"
        opacity="1"
      ></Path>
      <Path
        fill="#CC4253"
        d="M144.959 96.062c-6.587.435-13.447.504-20.749.474 1.182-.579 2.807-1.473 4.427-1.463 5.35.032 10.698.39 16.322.99z"
        opacity="1"
      ></Path>
      <Path
        fill="#9D444C"
        d="M136.293 92.01h8.066l.023 1.338h-11.68l-.156-.762a71.937 71.937 0 013.747-.576z"
        opacity="1"
      ></Path>
      <Path
        fill="#CC4253"
        d="M159.978 96.079c-2.254.42-4.763.486-7.737.453a40.341 40.341 0 017.737-.453zM149.015 96.143c-.364.367-.887.427-1.8.4.287-.293.963-.5 1.8-.4zM120.018 96.15c-.365.366-.89.425-1.804.395.288-.294.966-.499 1.804-.396z"
        opacity="1"
      ></Path>
      <Path
        fill="#DB808E"
        d="M114.547 115.057c.19.075.241.26.213.72-.208.092-.36-.082-.453-.283-.036-.077.064-.217.24-.437z"
        opacity="1"
      ></Path>
      <Path
        fill="#F2B781"
        d="M58.726 128.854c.81-.476 1.86-.77 2.386-1.463 1.512-1.996 2.813-4.152 4.531-6.39.777.22 1.22.585 1.93 1.471.656 1.896 1.045 3.269 1.433 4.642 0 0-.071.28-.359.532-.45.96-.611 1.667-.773 2.374.253.488.506.975.854 1.718-1.471.514-3.038.772-5.277.805-1.928-.283-3.184-.341-4.44-.399-2.15-.19-4.301-.382-6.474-.981 2.048-1.042 4.118-1.676 6.189-2.309z"
        opacity="1"
      ></Path>
      <Path
        fill="#FAFCFC"
        d="M59.07 132.474c1.197-.272 2.453-.214 4.011.09-.051.466-.403.685-.918 1.17-1.12-.133-2.076-.531-3.093-1.26z"
        opacity="1"
      ></Path>
      <Path
        fill="#53BC91"
        d="M108.61 107.993c.865 1.537 1.34 3.067 2.083 4.814-.409 3.044-.63 6.442-5.635 4.474l2.607-2.21c-2.398-1.73-4.625-3.337-7.229-5.339-.363-.84-.349-1.286-.335-1.732a3383.8 3383.8 0 018.51-.007z"
        opacity="1"
      ></Path>
      <Path
        fill="#93D7B9"
        d="M100.064 107.586c.023.86.009 1.305.043 2.082-.038.98-.124 1.629-.125 1.636-1.538-4.848-3.24-10.214-4.967-15.95.772.245 1.57.86 2.674 1.939.63 1.213.955 1.96 1.28 2.708.353 2.39.705 4.78 1.095 7.585zM100.659 114.691c.033.367-.074.587-.181.806-.094-.098-.283-.22-.265-.288.063-.232.198-.445.446-.518zM94.046 94.245c.228-.083.517.096.886.521-.22.078-.522-.09-.886-.52zM171.96 132.44c-.492.441-.912.53-1.654.594a93.07 93.07 0 015.347-12.015c-.967 3.67-2.293 7.37-3.692 11.421zM177.326 119.987c.754-.937 1.847-1.898 3.259-2.876.32-.018.347-.041.375.181.028.223.118.687.118.687-1.139.662-2.277 1.323-3.752 2.008z"
        opacity="1"
      ></Path>
      <Path
        fill="#54BA91"
        d="M181.231 117.88c-.153.099-.243-.365-.273-.599.123.01.275.255.273.599z"
        opacity="1"
      ></Path>
      <Path
        fill="#93D7B9"
        d="M176.234 120.93c-.08-.218.087-.52.515-.881.086.226-.091.512-.515.88z"
        opacity="1"
      ></Path>
      <Path
        fill="#C4E7E7"
        d="M58.626 128.582c-1.97.905-4.041 1.539-6.379 2.314-1.839-.216-3.41-.573-4.982-.93l-.074-1.302c2.517-1.015 5.034-2.03 7.774-3.343 1.336.796 2.449 1.893 3.661 3.261z"
        opacity="1"
      ></Path>
      <Path
        fill="#C6E8E8"
        d="M69.317 126.936c-.7-1.195-1.088-2.568-1.512-4.288 1.237-1.762 2.51-3.179 4.286-5.154 1.738 4.456.043 6.974-2.774 9.442zM68.028 129.737c.008-.424.17-1.132.622-1.946.038.483-.215 1.073-.622 1.946z"
        opacity="1"
      ></Path>
      <Path
        fill="#7B4B4B"
        d="M118.51 161.885s.426.245.591.776c.496.762.827.992 1.158 1.221 0 0-.137-.013-.12.29.721.78 1.425 1.256 2.128 1.732 2.141 2.215 4.283 4.43 6.572 7.377a86.11 86.11 0 01.211 6.694c-.046.06-.151.171-.151.171-.878.43-1.756.86-3.065 1.542-.894-.064-1.358-.381-1.685-1.016.692-1.516 1.126-2.79 1.824-3.9 2.359-3.743.976-5.032-2.987-4.777-.66.043-1.324.006-2.02-.333-1-1.388-1.966-2.438-2.931-3.488l-1.044 1.353c1.337.824 2.673 1.648 4.007 2.822-.669 1.452-1.335 2.555-2.299 3.51-2.094-2.063-3.89-3.978-5.685-5.892-.102-.312-.284-.566-.77-1.117-.226-.355-.23-.848-.23-.848l.477-7.703c1.033.164 2.738.433 4.814.718.371.015.621.053.724.278.218.358.345.48.482.59z"
        opacity="1"
      ></Path>
      <Path
        fill="#693F3E"
        d="M111.75 167.824c.263.178.268.671.282.917-.575.562-1.165.879-2.061 1.335-3.17-2.296-6.057-4.653-10.598-3.093-.38-.47-.38-.908-.058-1.694 1.111-.661 1.9-.975 2.689-1.288 1.415-.306 2.83-.612 4.723-.738.681.453.948.64 1.276.738a150.487 150.487 0 003.747 3.823zM96.959 166.563c-1.392.1-2.819-.128-4.6-.441 1.354-1.705 3.06-3.311 4.6.441z"
        opacity="1"
      ></Path>
      <Path
        fill="#7B4B4B"
        d="M101.946 163.662c-.731.652-1.52.966-2.629 1.298-.4-.841-.482-1.701-.563-2.562 1.045.309 2.09.618 3.192 1.264zM107.892 163.78c-.217.123-.484-.064-.802-.558.217-.126.486.059.802.557z"
        opacity="1"
      ></Path>
      <Path
        fill="#93D7B9"
        d="M170.45 145.022c3.04-.484 6.541-.957 10.308-1.671.265-.24.755-.29 1.244-.334.489-.045.968-.147.968-.147-.95.712-1.853 1.946-2.86 2.038-3.044.28-6.129.115-9.66.114zM186.16 140.058l1.105 1.169c-.746.154-1.493.307-1.997.056.458-.679.675-.952.892-1.225zM168.02 145.281c.487-.283.918-.31 1.672-.311-.124.36-.57.694-1.311 1.054-.335-.145-.376-.316-.361-.743z"
        opacity="1"
      ></Path>
      <Path
        fill="#56BE94"
        d="M185.9 140.147c.043.184-.174.457-.624.856-.034-.173.165-.47.624-.856zM182.869 142.726c.101.144-.378.246-.623.257.01-.127.266-.264.623-.257z"
        opacity="1"
      ></Path>
      <Path
        fill="#53BC91"
        d="M197.954 118.607c-.242-.397-.24-.792-.21-1.185.001-.01.307.002.47.003-.003.395-.008.79-.26 1.182z"
        opacity="1"
      ></Path>
      <Path
        fill="#93D7B9"
        d="M169.753 133.078c-.196.826-.646 1.746-1.39 2.803-.308-.287-.323-.71-.259-1.443.518-.628.957-.946 1.65-1.36z"
        opacity="1"
      ></Path>
      <Path
        fill="#53BC91"
        d="M99.349 100.006c-.705-.753-1.03-1.5-1.402-2.548 2.878-2.842 4.375-2.087 6.658 3.431-1.793-.323-3.335-.6-5.256-.883z"
        opacity="1"
      ></Path>
      <Path
        fill="#693F3E"
        d="M124.012 180.99c.464.317.928.634 1.687.98-.384 3.376-3.202 3.083-4.577 1.697-3.73-3.76-9.62-6.349-8.368-13.47 2.056 1.684 3.851 3.599 6.094 5.957a850.871 850.871 0 005.164 4.835z"
        opacity="1"
      ></Path>
      <Path
        fill="#6B514E"
        d="M129.232 179.969c.177.483.354.966.414 1.654-.302-.216-.487-.636-.71-1.267-.037-.21.068-.32.148-.366.079-.046.148-.021.148-.021z"
        opacity="1"
      ></Path>
      <Path
        fill="#91D1CF"
        d="M119.567 115.724c1.68-.519 3.352-1.46 5.038-1.485 9.65-.141 19.303.01 28.954-.099 3.923-.044 5.79 1.27 5.624 5.527-.26 6.646.14 13.321-.224 19.958-.082 1.504-2.121 4.124-3.312 4.154-11.639.292-23.289.158-34.935.076-.533-.004-1.062-.66-1.445-1.589.714-1.487 1.28-2.399 2.305-3.298 11.37.012 22.283.012 33.195.012l-.006-.846c-.65-.13-1.3-.259-1.908-.832.058-3.414.227-6.396 0-9.348-.077-1.009-1.147-1.94-1.764-2.908-.664.92-1.837 1.809-1.9 2.769-.215 3.285-.04 6.595-.413 9.951-.931.01-1.463-.037-1.958-.507.051-2.215.262-4.036-.008-5.782-.13-.84-1.167-1.541-1.793-2.305-.648.744-1.756 1.433-1.855 2.244-.254 2.084-.06 4.222-.41 6.362-1.166-1.317-1.97-2.657-3.028-4.42-2.614 6.114-7.33 4.465-11.993 4.047-2.35-.211-4.737.787-5.72-2.82-.818-6.597-1.631-12.729-2.444-18.861z"
        opacity="1"
      ></Path>
      <Path
        fill="#92D3D1"
        d="M119.236 115.925c1.144 5.931 1.957 12.063 2.744 18.998a38.515 38.515 0 01-.866 4.033c-.566.911-1.133 1.823-1.978 2.924a369.287 369.287 0 01.1-25.955z"
        opacity="1"
      ></Path>
      <Path
        fill="#724848"
        d="M129.565 179.787c-.333.182-.402.157-.435.142-.07-1.982-.107-3.95-.161-6.337 2.033 1.468 5.034 3.217.596 6.195zM122.147 165.619c-.583-.19-1.287-.666-1.975-1.507.628.164 1.242.693 1.975 1.507zM120.164 163.594c-.236.059-.567-.171-.976-.703.241-.064.561.175.976.703zM118.478 161.742c-.104.032-.23-.09-.434-.321.131-.103.294-.01.434.321z"
        opacity="1"
      ></Path>
      <Path
        fill="#FCC963"
        d="M160.545 181.321c-3.68-4.692-3.556-5.449 1.526-8.254l2.9 3.895-.61.753-4.15-1.69c.773 3.824 7.544 7.397.323 10.394-.867.36-2.657-1.508-4.177-2.44 2.11-1.135 3.24-1.741 4.188-2.658z"
        opacity="1"
      ></Path>
      <Path
        fill="#724848"
        d="M124.149 180.672c-1.71-1.146-3.283-2.61-5.004-4.37.518-1.398 1.184-2.501 1.853-3.953l.002-.348c.662 0 1.326.037 1.986-.006 3.963-.255 5.346 1.034 2.987 4.778-.698 1.108-1.132 2.383-1.824 3.899zM121 172l-4.009-2.473 1.044-1.353c.965 1.05 1.931 2.1 2.93 3.488L121 172z"
        opacity="1"
      ></Path>
      <Path
        fill="#808485"
        d="M121.572 138.968c-.177-1.089.103-2.166.414-3.58 1.008 2.804 3.396 1.806 5.745 2.017 4.663.418 9.379 2.067 11.993-4.047 1.058 1.763 1.862 3.103 3.394 4.498a49.442 49.442 0 003.662-.173c.533.046 1.065.093 2.352.182a65.182 65.182 0 003.679-.12l1.95.389.006.846c-10.912 0-21.824 0-33.195-.012z"
        opacity="1"
      ></Path>
      <Path
        fill="#E6F4F4"
        d="M152.853 137.302c-1.017.498-1.992.552-3.323.507-.382-3.4-.556-6.71-.34-9.994.062-.96 1.235-1.848 1.899-2.77.617.968 1.687 1.9 1.765 2.909.226 2.952.057 5.934 0 9.348zM146.818 137.259c-1.016.5-1.994.576-3.337.573-.38-2.194-.573-4.332-.319-6.416.1-.811 1.207-1.5 1.855-2.244.626.764 1.663 1.464 1.793 2.305.27 1.746.06 3.567.008 5.782z"
        opacity="1"
      ></Path>
    
    <Defs>
      <LinearGradient
        id="a"
        x1={186.003}
        y1={-84.547}
        x2={186.003}
        y2={391.401}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#3641FC" />
        <Stop offset={1} stopColor="#F9F9F9" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default ChillingMan;