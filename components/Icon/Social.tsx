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

const Social = ({
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
        fill="#FEFEFE"
        opacity={1}
        d="M160 251H1V1h238v250h-79m42.163-136.775c-.179-.196-.358-.393-.277-1.23l5.296-8.919c-3.073.384-4.577.572-6.138-.054.366-9.883 1.096-19.772.954-29.648-.078-5.414-3.668-9.25-8.9-10.904-5.38-1.699-10.808-3.402-16.34-4.429-31.035-5.761-62.443-7.54-93.924-7.825-13.282-.12-26.597.767-39.855 1.76-6.691.501-8.548 2.853-7.923 9.51.618 6.581 2.267 13.065 2.486 19.575H28.96l-.116 2.392 9.924.943c0 2.358-.315 4.528.075 6.562.552 2.876 1.909 1.76 3.149.982 1.492 4.928 3.156 9.812 4.43 14.796 1.504 5.876-.018 7.276-6.03 5.975-4.213-.912-8.386-2.104-12.642-2.673-2.469-.33-5.049.113-4.86 3.91.195 3.96-.517 8.008.03 11.896 1.994 14.159 4.218 28.289 6.608 42.386 1.97 11.622 4.299 23.183 5.675 34.618l-4.381.253.035.62c2.052 0 4.105 0 6.934.136 1.045-.052 2.09-.104 4.051.112 45.763.102 91.525.227 137.288.285 8.308.01 16.616-.252 25.645-.264.726-.067 1.452-.133 2.857.019l4.172-.363c-2.48-.603-3.5-.852-4.318-1.8 1.166-14.21 2.862-28.406 3.302-42.64.275-8.889-3.624-10.63-11.349-6.709-1.322.67-3.502 1.174-4.5.532-1.006-.646-1.55-2.871-1.394-4.307.572-5.273 1.518-10.505 2.893-16.274l1.12-6.357c1.84 1.405 3.244 2.925 4.98 3.663 1.417.602 3.23.269 4.868.35-.624-1.35-1.052-2.85-1.932-4.006-.81-1.064-2.108-1.758-3.559-2.907 5.578-.455 10.909 1.681 15.418-1.535l.002-1.846-13.983-1.144 17.012-9.967-.925-1.659c-6.755-.794-11.294 4.305-17.276 6.185z"
      />
      <Path
        fill="#323A60"
        opacity={1}
        d="M38.519 82.077c-1.196-6.526-2.845-13.01-3.463-19.59-.625-6.658 1.232-9.01 7.923-9.51 13.258-.994 26.573-1.88 39.855-1.76 31.48.283 62.889 2.063 93.924 7.824 5.532 1.027 10.96 2.73 16.34 4.43 5.232 1.652 8.822 5.49 8.9 10.903.142 9.876-.588 19.765-1.07 30.408-1.642 4.422-3.17 8.084-4.7 11.746l-.94-.314.516-8.753-1.947-.196-2.416 11.15-4.776-3.416c1.577 4.382 2.95 8.198 4.328 12.01.005-.005.009-.015-.28.25-1.287 9.058-2.285 17.852-3.349 27.221-.872-3.946-1.457-7.492-2.453-10.919-2.196-7.56-4.598-15.062-7.06-22.912-1.38-2.433-2.618-4.541-3.817-7.021-.208-3.66-.453-6.948-.706-10.328l5.07.593.676-1.31-10.564-7.666v-5.46l-1.05-.313-2.284 4.256c-4.447-3.137-5.078-10.227-12.38-10.215l8.36 10.263-15.405-2.78-.583 2.418 13.557 4.405c-4.56 2.381-9.33 4.653-13.828 7.373-1.158.7-1.461 2.813-2.157 4.276 1.6.288 3.388 1.174 4.76.74 2.949-.931 5.683-2.542 8.502-3.877-.002-.003-.007-.007-.043.34-2.607 3.448-5.178 6.549-7.887 9.323-1.383-.74-2.629-1.152-4.24-1.62-3.21-1.786-4.952-.425-6.263 2.072-.495.942-.931 1.914-1.46 2.507-2.457-1.546-4.847-2.727-7.08-4.239.75-3.347 1.343-6.363 2.248-9.517 1.304-1.906 3.18-3.758 3.024-5.417-.14-1.472-2.322-3.466-3.977-3.95-5.975-1.748-12.54 4.153-12.19 10.962.577 2.423 1.124 4.487 1.325 6.596-8.336 2.73-13.55 8.033-16.107 16.245-18.35.139-36.245.339-54.141.437-2.804.015-5.053.202-4.564 4.09-.29.502-.27.804-.178 1.435-.084.81-.07 1.28-.15 1.99-.055.407-.015.574-.043 1.202-.063 5.16-.056 9.858-.125 14.923.003 1.106.08 1.844.15 2.912.88.723 1.767 1.116 2.922 1.584.449.034.63-.004 1.27.029 4.902-.355 9.347-.782 14.088-.993a97.603 97.603 0 013.268 10.515c-.383.707-.633 1.181-1.141 1.744-.428.157-.597.226-.982.232-.217-.063-.618.143-1.036.063-4.788.046-9.158.173-13.681.192-.502-.027-.85.053-1.487.076-.676-.027-1.064.004-1.546-.066-.092-.1-.474-.094-.474-.094s-.158.33-.399.687c-.178 5.783-.116 11.21-.076 17.11-.036 5.522-.049 10.57-.419 15.626-1.466.572-2.574 1.137-3.682 1.702-1.045.052-2.09.104-3.628-.112-.704-.524-.973-.631-1.302-.588-2.17-11.588-4.498-23.149-6.468-34.77-2.39-14.098-4.614-28.228-6.608-42.387-.547-3.888.165-7.937-.03-11.895-.189-3.798 2.391-4.24 4.86-3.91 4.256.568 8.43 1.76 12.641 2.672 6.013 1.3 7.535-.1 6.032-5.975-1.275-4.984-2.94-9.868-4.46-15.564-.294-2.008-.559-3.25-1.126-5.914l42.625-1.673 1.186 9.304 1.742-.085 1.048-6.059 18.81-3.794c-1.86-1.193-2.41-1.851-2.864-1.79-5.095.677-6.13-1.99-6.824-6.539-1.434-9.4-3.22-10.235-12.244-7.795l.625 6.06c-1.693-4.347-3.472-7.517-8.825-5.215-.252.108-.636-.133-.96-.143-10.963-.342-21.926-.676-32.889-1.011l-.004 1.15 9.6.902-.042 1.979-9.332.653v5.807c1.947 0 4.297-.198 6.585.091.996.126 1.866 1.252 2.793 1.924-.952.65-1.867 1.79-2.862 1.865-3.48.261-6.989.155-10.486.188z"
      />
      <Path
        fill="#454B7A"
        opacity={1}
        d="M38.03 82.069c3.986-.025 7.494.081 10.975-.18.995-.075 1.91-1.214 2.862-1.865-.927-.672-1.797-1.798-2.793-1.924-2.288-.29-4.638-.091-6.585-.091v-5.807l9.332-.653.041-1.979-9.599-.902.004-1.15c10.963.335 21.926.669 32.89 1.01.323.01.707.252.959.144 5.353-2.302 7.132.868 8.825 5.216l-.625-6.061c9.025-2.44 10.81-1.605 12.244 7.795.694 4.55 1.729 7.216 6.824 6.538.454-.06 1.004.598 2.863 1.791l-18.809 3.794-1.048 6.059-1.742.085-1.186-9.304-42.625 1.673c.567 2.665.832 3.906 1.088 5.545-1.173 1.916-2.53 3.031-3.082.155-.39-2.034-.075-4.204-.075-6.562l-9.924-.943.116-2.392c2.86 0 5.721 0 9.07.008m23.12-9.067c-2.149.002-4.317-.162-6.437.085-.905.105-1.849.951-2.476 1.708-.192.23.613 1.875.963 1.875 3.407.005 6.815-.202 10.222-.348-.151-1.007-.265-2.022-.492-3.01-.035-.152-.592-.183-1.78-.31m25.747 6.281l-1.117-2.566-1.042.604c.696.854 1.392 1.707 2.16 1.962z"
      />
      <Path
        fill="#333B61"
        opacity={1}
        d="M206.954 204.79c-.727.067-1.453.133-2.559-.144-.683-.79-.986-1.235-1.26-2.09.273-4.788.515-9.167.777-13.933-.034-.899-.087-1.412.141-2.23.58-5.607.877-10.906 1.192-16.506-5.7-.339-10.468-.622-15.237-1.372.33-14.152.662-27.837.994-41.521 0 0-.004.01.283-.084 1.72 2.29 3.152 4.675 4.584 7.059-.806 5.248-1.752 10.48-2.324 15.753-.156 1.436.388 3.661 1.393 4.307 1 .642 3.18.139 4.501-.532 7.725-3.92 11.624-2.18 11.349 6.71-.44 14.233-2.136 28.428-3.522 43.291-.25.865-.282 1.08-.312 1.293z"
      />
      <Path
        fill="#494F7D"
        opacity={1}
        d="M196.153 133.709c-1.716-2.124-3.148-4.509-4.872-6.795-1.666-3.717-3.039-7.533-4.616-11.915l4.776 3.416 2.416-11.15 1.947.196-.515 8.753.94.314c1.528-3.662 3.057-7.324 4.729-11.34 1.647-.54 3.15-.728 6.224-1.112-2.17 3.656-3.733 6.288-5.667 9.428-.683 1.052-.994 1.596-1.306 2.139l.609.469 1.818-1.245c5.509-2.522 10.048-7.621 16.803-6.827l.925 1.659-17.012 9.967 13.983 1.144-.002 1.846c-4.51 3.216-9.84 1.08-15.418 1.535 1.451 1.149 2.748 1.843 3.56 2.907.88 1.156 1.307 2.656 1.931 4.006-1.637-.081-3.45.252-4.867-.35-1.737-.738-3.14-2.258-4.98-3.663-.418 2.368-.77 4.363-1.406 6.618z"
      />
      <Path
        fill="#5D5867"
        opacity={1}
        d="M203.106 202.965c.303.446.606.892.929 1.619-8.29.418-16.597.68-24.905.67-45.763-.058-91.525-.183-137.746-.419.65-.7 1.758-1.264 3.524-1.538 1.798.428 2.94.686 4.082.687 49.605.02 99.21.03 148.815-.024 1.767-.002 3.534-.649 5.301-.995zM35.6 203.924c.725.034.994.14 1.31.597-1.948.2-4 .2-6.053.2l-.035-.62c1.46-.085 2.92-.169 4.778-.177zM207.293 204.9c-.309-.323-.278-.537-.128-1.052 1.138-.054 2.158.195 4.639.798-2.403.21-3.288.286-4.511.254z"
      />
      <Path
        fill="#EDB34C"
        opacity={1}
        d="M190.009 168.982l15.236.905c-.315 5.6-.613 10.899-1.375 16.527-.464.328-.811.453-1.253.404-2.5.011-4.558.072-7.083.085-50.473-.033-100.478-.019-150.484-.005-.063-5.426-.125-10.852.24-16.636.427-.358.78-.491.78-.491.388-.031.776-.062 1.791.004.851.062 1.076.027 1.301-.007 4.37-.127 8.74-.254 13.623-.22.784.24.999.159 1.157-.08.17-.069.338-.138 1.235-.226 10.72-.065 20.712-.11 31.126-.089 1.55.146 2.678.225 3.882.4.076.098.428.142.428.142s.275-.229.644-.29c.864-.025 1.358.01 1.928.142.074.098.422.144.422.144s.269-.228.653-.3c1.156-.172 1.929-.274 2.849-.047 1.398.935 2.618 1.956 3.91 2.056 2.224.172 4.493-.23 6.937-.11 1.148.837 2.102 1.395 3.06 2.296 2.874 3.382 5.54 6.657 8.68 9.383 2.29 1.986 4.574 1.509 5.676-2.1 4.272-4.803 7.905-9.863 14.82-11.45a90.781 90.781 0 016.376-.296c6.11-.007 11.762-.069 17.875-.078 4.492.012 8.522-.028 12.925.005 1.13.026 1.885-.021 2.641-.068m-87.01 7.669l-.281-5.038-1.068.11v12.591l1.349-.008v-7.655z"
      />
      <Path
        fill="#EDB34D"
        opacity={1}
        d="M46.955 157.804c-.887-.394-1.774-.787-2.463-1.717.043-1.382-.111-2.227-.266-3.072-.006-4.698-.013-9.396.174-14.649.365-.864.306-1.129.014-1.347-.014-.471-.029-.942.177-1.944.327-.835.32-1.136.197-1.434-.63-3.697 1.619-3.884 4.423-3.9 17.896-.097 35.79-.297 54.114-.087-.326 2.697-.824 5.145-1.895 7.31-1.743 3.518-3.861 6.85-6.157 9.993-1.756-.651-3.167-1.336-4.594-1.367-9.88-.22-19.762-.307-29.644-.404-.25-.003-.505.37-.902.681l2.152 10.83c-4.445.428-8.89.855-13.805.753-.47-8.434-.47-16.34-.47-24.246l-1.055.011v24.589z"
      />
      <Path
        fill="#313960"
        opacity={1}
        d="M173.995 114c1.238 2.108 2.476 4.216 3.856 7.063.185 1.395.135 2.074.284 2.706 2.733 11.637 5.499 23.267 8.226 34.905.26 1.11 2.04 3.297-1.363 2.324.003.003.009.008-.097-.216-.302-.509-.567-.696-.902-.783.001.001.002.003.008-.337-.334-1.116-.673-1.893-1.01-2.666.003.004.008.01-.014-.293-.344-.79-.666-1.275-.986-1.99.003-.23.01-.69-.097-.916-.307-.509-.573-.701-.903-.8.003.003.009.007-.121-.293-1.036-1.106-1.942-1.912-2.855-2.965-.007-.247-.035-.74-.033-1.076.002-.784.003-1.232.321-1.725.018-.873-.033-2.073-.624-2.469-3.205-2.15-6.533-4.121-9.845-6.11-.713-.429-1.532-.68-2.301-1.012l-.82.947 4.56 5.348-10.047 2.417.269 1.525h6.539c-2.09 3.266-4.065 6.35-6.384 9.399-2.09-2.417-3.834-4.797-5.689-7.386-.307-.493-.578-.63-.943-.61-.018.011.005-.023.002-.325-.886-1.055-1.77-1.808-2.648-3.026-.007-3.265-.018-6.064.135-9.045.022-.936-.12-1.692-.32-2.847-1.07-1.541-2.08-2.683-3.161-4.23a49.843 49.843 0 01-.035-4.793c.086-.708.09-1.119.236-1.616.143-.086.438-.244.825-.207 2.197-1.197 4.35-2.133 5.748-3.73 2.966-3.388 5.539-7.121 9.041-11.723l-.924 14.999 1.804.27c3.83-4.102 2.935-9.64 3.554-16.084l4.194 11.253 1.426-.074 1.094-3.81z"
      />
      <Path
        fill="#6D4E4D"
        opacity={1}
        d="M45.027 187.372c50.029-.488 100.034-.502 150.507-.095.467 1.168.467 1.915 0 2.684-6.831.049-13.193.075-20.022.082-7.464-.008-14.46.003-21.84-.006-1.15-.015-1.915-.01-3.148-.016-16.14-.004-31.812.004-47.675-.243-1.09-.085-1.988.084-3.352.245-15.938-.01-31.414.182-46.88-.132-5.013-.102-4.722 2.557-4.663 5.915.058 3.379-.605 6.461 4.814 6.282 11.798-.39 23.62-.026 35.43-.14 13.518-.129 11.692 2.115 12.151-11.933 1.152-.002 1.92.004 2.683.468-.01 1.784-.018 3.11-.02 4.437-.004 7.048-.003 7.058 7.163 7.05 13.599-.015 27.198-.043 41.181-.039 1.155.004 1.924-.02 3.159-.014 7.482.018 14.498.008 21.98.019 7.47-.003 14.475-.027 21.893-.033 4.632-3.591 2.38-7.849 1.825-12.21 1.07-.401 1.928-.551 3.009-.696l.67.012c-.242 4.38-.484 8.76-.757 13.547-1.796.755-3.563 1.402-5.33 1.404-49.605.053-99.21.045-148.815.024-1.142 0-2.284-.26-3.725-.695-.287-5.345-.274-10.394-.238-15.917z"
      />
      <Path
        fill="#6168A6"
        opacity={1}
        d="M95.61 147.226c1.959-3.411 4.077-6.744 5.82-10.262 1.071-2.165 1.569-4.613 2.35-7.283 2.129-8.588 7.343-13.89 15.71-16.286-.19 1.954-.755 3.618-1.674 5.392-2.475 2.184-4.597 4.258-6.81 6.71-.429 4.766-1.098 9.158-1.002 13.533.082 3.745 1.041 7.47 1.226 11.368-.66.216-.935.27-1.531.122-6.736-1.007-7.558-.049-8.085 8.847.365 4.84-2.81 7.206-5.733 9.72-9.992.045-19.984.09-30.445.067-.22-.544.03-1.018.803-1.725 9.058-3.695 17.592-7.158 26.392-10.728-3.584-4.141.185-6.661 2.978-9.475z"
      />
      <Path
        fill="#444A79"
        opacity={1}
        d="M174.034 113.628c-.403 1.641-.768 2.911-1.133 4.18-.475.026-.95.05-1.426.075l-4.194-11.253c-.62 6.443.277 11.982-3.554 16.084l-1.804-.27.924-14.999c-3.502 4.602-6.075 8.335-9.041 11.724-1.398 1.596-3.551 2.532-5.75 3.3-.207-2.469-.026-4.473.154-6.476 2.571-3.101 5.142-6.202 7.89-9.703.086-.362-.005-.323-.096-.285-2.821 1.333-5.555 2.944-8.504 3.875-1.372.434-3.16-.452-4.76-.74.696-1.463 1-3.576 2.157-4.276 4.499-2.72 9.269-4.992 13.828-7.373l-13.557-4.405.583-2.418 15.405 2.78-8.36-10.263c7.302-.012 7.933 7.078 12.38 10.215l2.284-4.256 1.05.314v5.46l10.564 7.665-.676 1.31-5.07-.593c.253 3.38.498 6.668.706 10.328m-10.275-7.805l-.51.171c.171.055.342.11.51-.171m9.724 4.771s-.067-.114 0 0z"
      />
      <Path
        fill="#F9F9F8"
        opacity={1}
        d="M95.273 146.957c-2.457 3.083-6.226 5.603-2.642 9.744-8.8 3.57-17.334 7.033-26.258 10.495-1.426-3.355-2.462-6.71-3.792-10.282-1.018-3.853-1.74-7.488-2.448-11.047.397-.31.651-.684.902-.681 9.882.097 19.765.185 29.644.404 1.427.031 2.838.716 4.594 1.367z"
      />
      <Path
        fill="#E1876E"
        opacity={1}
        d="M118.169 118.677c.566-1.664 1.131-3.328 1.666-5.328-.577-2.398-1.124-4.462-1.425-7.047 2.087-1.468 3.927-2.414 6.82-3.902l5.735 2.607c-.593 3.016-1.187 6.032-2.267 9.42-4.502 1.711-.154 3.17-.624 4.937-.926 1.975-1.773 3.575-2.621 5.174-1.418-.91-2.916-1.72-4.23-2.762-1.127-.895-2.044-2.056-3.054-3.099z"
      />
      <Path
        fill="#414774"
        opacity={1}
        d="M184.995 160.995c3.407.976 1.627-1.21 1.366-2.32-2.727-11.64-5.493-23.269-8.226-34.906-.149-.632-.099-1.31-.14-2.382 2.318 7.112 4.72 14.613 6.916 22.174.996 3.427 1.581 6.973 2.453 10.919 1.064-9.369 2.062-18.163 3.35-27.222-.044 13.42-.376 27.105-.706 41.257-.755.514-1.51.561-2.785.196-1.088-2.846-1.658-5.281-2.228-7.716z"
      />
      <Path
        fill="#2B1E1E"
        opacity={1}
        d="M131.277 104.87c-2.603-.904-4.894-1.946-6.047-2.47-2.893 1.488-4.733 2.434-6.849 3.542-.597-6.287 5.968-12.188 11.943-10.44 1.655.484 3.838 2.478 3.977 3.95.156 1.66-1.72 3.511-3.024 5.417z"
      />
      <Path
        fill="#504E50"
        opacity={1}
        d="M136.175 118.99c.463-.958.899-1.93 1.394-2.872 1.311-2.497 3.052-3.858 6.378-1.74.624 1.983.77 3.578.663 5.418-.913.772-1.6 1.773-2.23 1.738-2.2-.122-4.377-.603-6.521-1.217.133-.622.225-.975.316-1.327z"
      />
      <Path
        fill="#6367A2"
        opacity={1}
        d="M136.109 118.625c-.025.717-.117 1.07-.555 1.777-.758.454-1.17.554-1.927.612-2.056-.703-3.766-1.364-5.476-2.025.393-1.391-3.955-2.85.39-4.23 2.721 1.14 5.111 2.32 7.568 3.866z"
      />
      <Path
        fill="#D09D45"
        opacity={1}
        d="M47.223 157.878c-.268-8.27-.268-16.467-.268-24.663l1.055-.01c0 7.905 0 15.811.012 24.173-.17.496-.35.534-.8.5z"
      />
      <Path
        fill="#E2886F"
        opacity={1}
        d="M144.86 119.55c-.144-1.594-.289-3.189-.548-5.116 1.131.08 2.377.493 3.76 1.232-.042 2.33-.223 4.334-.402 6.766.001.43-.294.587-.474.401-.9-1.217-1.617-2.25-2.335-3.283z"
      />
      <Path
        fill="#D09D45"
        opacity={1}
        d="M44.151 153.382c.23.478.384 1.323.349 2.376-.268-.532-.346-1.27-.349-2.376zM44.647 133.831c.264.108.271.409.042.904-.312-.099-.332-.4-.042-.904z"
      />
      <Path
        fill="#E28B6F"
        opacity={1}
        d="M49.009 169.66c-.072.142-.297.177-.86.172.01-.119.358-.199.86-.172z"
      />
      <Path
        fill="#D09D45"
        opacity={1}
        d="M44.319 137.258c.387-.02.446.244.15.647-.165-.074-.205-.24-.15-.647z"
      />
      <Path
        fill="#E28B6F"
        opacity={1}
        d="M45.976 169.67c.093.1-.26.234-.445.235-.187.001-.03-.33-.03-.33s.383-.005.475.095zM63.726 169.405c.058.302-.157.382-.523.224-.095-.08.306-.287.523-.224z"
      />
      <Path
        fill="#333A63"
        opacity={1}
        d="M61.587 73.022c.751.107 1.308.138 1.343.29.227.988.34 2.003.492 3.01-3.407.146-6.815.353-10.222.348-.35 0-1.155-1.644-.963-1.875.627-.757 1.571-1.603 2.476-1.708 2.12-.247 4.288-.083 6.874-.065z"
      />
      <Path
        fill="#323A60"
        opacity={1}
        d="M86.861 79.582c-.731-.554-1.427-1.407-2.123-2.26l1.042-.605c.372.855.745 1.71 1.081 2.865z"
      />
      <Path
        fill="#5D5867"
        opacity={1}
        d="M203.912 188.623c-.02.386-.466.378-.686.02a5.625 5.625 0 01-.167-1.776s.347-.125.53-.147c.236.491.289 1.004.323 1.903z"
      />
      <Path
        fill="#FEFEFE"
        opacity={1}
        d="M202.4 114.546c-.37.736-.976 1.15-1.582 1.566l-.609-.47c.312-.542.623-1.086 1.176-1.818.42.008.599.205 1.015.722z"
      />
      <Path
        fill="#E28B6F"
        opacity={1}
        d="M101.849 159.092c.292-8.62 1.114-9.579 7.99-8.235 3.79 2.942 6.997 5.543 10.492 7.675 2.1 1.28 5.404 3.235 6.853 2.453 4.975-2.687 9.37-6.447 14.253-9.87.687-.409 1.109-.745 1.835-1.24 3.224-3.304 6.453-2.584 9.757-.911 0 0-.023.034.007.332.297.845.565 1.392.812 2.265.023 1.196.066 2.065-.146 3.197-3.585 3.17-6.671 6.446-10.328 8.854-2.487 1.638-3.012 3.152-2.2 5.966-1.657.746-3.601 1.977-4.685 1.447-6.327-3.094-12.488-2.196-18.726-.015-2.25.16-4.52.562-6.745.39-1.29-.1-2.51-1.12-3.938-2.399-.453-2.457-.73-4.241-.602-6.009 4.206.645 8.008 1.273 11.81 1.9l.25-1.68c-4.892-1.05-9.784-2.1-14.936-3.254a62.85 62.85 0 01-1.753-.866z"
      />
      <Path
        fill="#313961"
        opacity={1}
        d="M184.998 160.998a324.872 324.872 0 001.852 7.64c-3.885.379-7.915.42-12.62.139-4.259-3.123-7.843-5.925-11.102-8.867 1.95-1.9 3.573-3.66 4.88-5.077l3.006 3.807c.663-1.333 1.436-2.626 1.953-4.015.361-.971.371-2.073.706-4.165l4.64 7.653c.354-2.723.51-3.922 1.003-5.116.789.006 1.24.006 1.69.007 0 0-.006-.004.095.221.37.416.638.608.906.799 0 0-.007.46.005.998.338 1.021.666 1.503.993 1.985 0 0-.005-.007-.009.33.333 1.112.67 1.888 1.005 2.665l.103.222c.303.506.57.692.903.782l-.01-.008z"
      />
      <Path
        fill="#F5F3F1"
        opacity={1}
        d="M117.956 171.29c6.045-2.461 12.206-3.359 18.533-.265 1.084.53 3.028-.701 5.099-1.437 3.067-.237 5.609-.155 8.15-.074-6.461 1.492-10.094 6.552-14.748 11.282-5.103-2.438-9.54-4.995-13.978-7.552-.954-.559-1.908-1.117-3.056-1.955z"
      />
      <Path
        fill="#5E66A4"
        opacity={1}
        d="M162.803 160.05c3.584 2.802 7.168 5.604 10.965 8.674-5.438.33-11.09.392-17.36.065-3.255-2.708-4.144-5.394-2.964-8.88.566-1.672.367-3.602.514-5.415-.044-.868-.087-1.737-.05-3.29.11-.922.14-1.16.17-1.399 1.744 2.38 3.488 4.761 5.692 7.474a85.99 85.99 0 013.033 2.772z"
      />
      <Path
        fill="#333960"
        opacity={1}
        d="M153.702 154.758c.109 1.55.308 3.48-.258 5.15-1.18 3.487-.29 6.173 2.505 8.825-1.66.421-3.48.507-5.756.687-2.996.013-5.538-.069-8.495-.16-1.336-2.496-.81-4.01 1.676-5.648 3.657-2.408 6.743-5.684 10.328-8.854z"
      />
      <Path
        fill="#383D64"
        opacity={1}
        d="M106.074 162.975c.277 1.785.553 3.57.859 5.697-.744.445-1.517.547-2.863.643-.573-.005-.96.134-.96.134-.495-.034-.99-.07-2.047-.12a2.802 2.802 0 00-.955.127c-1.127-.078-2.255-.157-3.805-.303 2.501-2.58 5.676-4.947 5.311-9.786.733-.022 1.23.232 2.133.863a66.824 66.824 0 012.327 2.745z"
      />
      <Path
        fill="#6B4D25"
        opacity={1}
        d="M121.016 173.586c4.433 2.215 8.871 4.772 13.691 7.403-.437 3.489-2.722 3.966-5.01 1.98-3.142-2.726-5.807-6-8.681-9.383z"
      />
      <Path
        fill="#E1A640"
        opacity={1}
        d="M103 177.099l-.001 7.207-1.349.008v-12.592l1.068-.11c.094 1.68.187 3.36.281 5.487z"
      />
      <Path
        fill="#6E504D"
        opacity={1}
        d="M202.617 186.818c.424.522.407.994.386 1.82-.862.504-1.72.654-3.045 1.08-.638.295-.808.313-1.35.313a447.565 447.565 0 00-2.607-.093v-2.613c2.058-.435 4.116-.496 6.616-.507z"
      />
      <Path
        fill="#E28B6F"
        opacity={1}
        d="M103.185 169.547c-.075-.098.312-.237.501-.16.19.076-.08.304-.08.304s-.347-.046-.421-.144zM100.185 169.554c-.077-.098.316-.242.51-.165.193.077-.082.306-.082.306s-.352-.044-.428-.141z"
      />
      <Path
        fill="#444A79"
        opacity={1}
        d="M163.128 159.91c-1.183-.672-2.04-1.485-3.012-2.594 1.86-3.382 3.834-6.466 5.924-9.732h-6.54l-.268-1.525 10.048-2.417-4.562-5.348.82-.947c.77.333 1.59.583 2.302 1.011 3.312 1.99 6.64 3.96 9.845 6.111.59.396.642 1.596.459 2.248-.934-.012-1.385.152-1.837.316l1.68 1.966s.027.493-.207.907c.243 1.304.72 2.195 1.198 3.086l-.665 5.12-4.64-7.652c-.335 2.092-.345 3.194-.706 4.165-.517 1.389-1.29 2.682-1.953 4.015l-3.006-3.807c-1.307 1.417-2.93 3.177-4.88 5.077z"
      />
      <Path
        fill="#E3886F"
        opacity={1}
        d="M144.61 119.796c.969.787 1.687 1.82 2.443 3.124.034.682.03 1.093-.344 1.932-2.178 1.02-3.986 1.609-6.144 2.246-2.598 2.265-5.318 4.18-6.987 6.77-2.709 4.205-4.728 8.854-7.413 14.038-3.073-5.111-3.978-9.06-.704-13.527 3.11-4.241 5.696-8.866 8.512-13.323.412-.1.823-.2 1.54-.384 2.49.26 4.668.74 6.866.862.63.035 1.318-.966 2.23-1.738z"
      />
      <Path
        fill="#E2886F"
        opacity={1}
        d="M140.916 127.05c1.807-.59 3.615-1.179 5.71-1.9.303 1.233.319 2.597.111 4.633-.728 3.832-1.234 6.992-2.032 10.255-.69.207-1.09.311-1.824.213-4.681-4.06-3.5-8.608-1.965-13.2z"
      />
      <Path
        fill="#EEB24E"
        opacity={1}
        d="M144.997 139.935c.506-3.16 1.012-6.32 1.812-9.749 1.305.875 2.315 2.017 3.302 3.884.063 1.384.15 2.043.238 2.702.01 2.8.022 5.6-.374 8.875-1.93-1.587-3.454-3.65-4.978-5.712z"
      />
      <Path
        fill="#6B6A94"
        opacity={1}
        d="M144.705 140.038c1.816 1.96 3.34 4.022 5.266 6.074 1.286.742 2.169 1.495 3.055 2.55-3.301-1.371-6.53-2.09-10.05 1.225-.996.203-1.39.239-1.805-.15-.148-1.82-.276-3.215-.201-4.868.799-1.685 5.236-1.224 2.247-4.415.398-.105.797-.209 1.488-.416z"
      />
      <Path
        fill="#414774"
        opacity={1}
        d="M179.316 152.997c-.816-.896-1.293-1.787-1.53-2.844 1.148.639 2.054 1.445 3.09 2.55-.32.3-.771.3-1.56.294zM177.988 148.663c-.561-.319-1.121-.974-1.68-1.63.45-.164.902-.328 1.519-.272.164.67.163 1.118.16 1.902z"
      />
      <Path
        fill="#6B6A94"
        opacity={1}
        d="M150.513 136.591c-.251-.478-.339-1.137-.343-2.122.224.43.365 1.186.343 2.122z"
      />
      <Path
        fill="#414774"
        opacity={1}
        d="M184.007 159.662c-.342-.437-.678-1.213-1.013-2.33.34.437.68 1.214 1.013 2.33z"
      />
      <Path
        fill="#6B6A94"
        opacity={1}
        d="M153.967 149.597c.08.447.051.685-.039 1.28-.327-.19-.595-.736-.874-1.591.335-.32.606-.182.913.31z"
      />
      <Path
        fill="#414774"
        opacity={1}
        d="M182.983 156.703c-.305-.178-.633-.66-.974-1.451.308.176.63.662.974 1.451zM181.9 153.797c-.161.036-.43-.156-.801-.575.228-.126.494.066.801.575zM184.9 160.782c-.227.134-.493-.052-.797-.559.23-.137.496.05.798.56z"
      />
      <Path
        fill="#33395F"
        opacity={1}
        d="M99.965 190.024c-.075 14.04 1.751 11.795-11.766 11.925-11.811.113-23.633-.252-35.431.139-5.419.18-4.756-2.903-4.814-6.282-.059-3.358-.35-6.017 4.664-5.915 15.465.314 30.94.121 46.897.118.485-.007.45.015.45.015zM103.04 190.032c15.672-.007 31.344-.015 47.49.446.463 4.12.452 7.773.442 11.426-13.6.023-27.198.051-40.797.066-7.166.008-7.167-.002-7.162-7.05 0-1.326.01-2.653.001-4.449-.013-.468.026-.439.026-.439z"
      />
      <Path
        fill="#313960"
        opacity={1}
        d="M176.03 201.914c-7.017.01-14.033.021-21.532-.445-.468-4.122-.456-7.767-.443-11.413 6.996-.01 13.993-.021 21.463.404.486 4.108.5 7.781.512 11.454z"
      />
      <Path
        fill="#474C7A"
        opacity={1}
        d="M176.495 201.936c-.478-3.695-.491-7.368-.51-11.457 6.356-.443 12.718-.47 19.548-.518 1.213.002 1.958.027 3.07.481.036 4.101-.296 7.772-.628 11.442-7.005.025-14.01.049-21.48.052z"
      />
      <Path
        fill="#493437"
        opacity={1}
        d="M153.671 190.037c.371 3.665.359 7.31.363 11.403-.754.471-1.523.495-2.678.491-.374-3.68-.363-7.333-.358-11.442.76-.462 1.525-.467 2.673-.452z"
      />
      <Path
        fill="#363C61"
        opacity={1}
        d="M198.388 201.903c-.08-3.69.251-7.36.588-11.442.174-.43.344-.448.769-.491 1.022 4.084 3.275 8.342-1.357 11.933z"
      />
      <Path
        fill="#6E504D"
        opacity={1}
        d="M103.019 190.014c-.75.005-1.518 0-2.67.001-.384.009-.349-.013-.368.001.88-.154 1.778-.323 2.868-.238.191.254.152.225.17.236z"
      />
      <Path
        fill="#474C7B"
        opacity={1}
        d="M142.88 140.25c3.326 3.395-1.111 2.934-2.301 4.58-2.74-.035-4.887-.288-6.967-.534-.596 2.2-1.093 4.035-1.933 6.098-5.786.358-11.228.487-16.66.186-.092-2.229.514-4.658-.425-5.713-3.418-3.838-2.37-8.292-2.63-12.618-.144-2.386-.569-4.755-.867-7.131 2.122-2.073 4.244-4.147 6.719-6.33 1.363.932 2.28 2.093 3.408 2.988 1.313 1.042 2.811 1.852 4.229 2.762.848-1.6 1.695-3.2 2.62-5.174 1.788.286 3.498.947 5.554 1.65-2.47 4.499-5.056 9.124-8.166 13.365-3.274 4.467-2.369 8.416.704 13.527 2.685-5.184 4.704-9.833 7.413-14.038 1.669-2.59 4.389-4.505 6.987-6.77-1.185 4.545-2.365 9.094 2.316 13.153z"
      />
      <Path
        fill="#ABB8C9"
        opacity={1}
        d="M115.01 151.01c5.441-.129 10.883-.258 17.082-.607 3.405-.022 6.054.176 8.797.476l.282.308c-4.616 3.35-9.012 7.111-13.987 9.798-1.449.782-4.754-1.172-6.853-2.453-3.495-2.132-6.703-4.733-10.171-7.473.135-.39.41-.445 1.356-.45 1.612.165 2.553.283 3.493.401z"
      />
      <Path
        fill="#353A5B"
        opacity={1}
        d="M115.02 150.58c-.951.312-1.892.194-3.118-.134-.857-3.945-1.816-7.671-1.898-11.416-.096-4.375.573-8.767 1.002-13.532.39 1.996.814 4.365.958 6.75.26 4.327-.788 8.781 2.63 12.62.939 1.054.333 3.483.426 5.712z"
      />
      <Path
        fill="#313960"
        opacity={1}
        d="M163.76 105.991c-.17.114-.34.058-.51.003.17-.057.34-.114.51-.003z"
      />
      <Path
        fill="#323A60"
        opacity={1}
        d="M156.002 106.003c.093-.036.184-.075.133-.06-.14.053-.135.057-.133.06zM173.45 110.537c-.034-.057.033.057 0 0z"
      />
      <Path
        fill="#D6765D"
        opacity={1}
        d="M106.478 162.992c-1.045-.806-1.686-1.595-2.472-2.656 4.748.777 9.64 1.827 14.532 2.877l-.25 1.68c-3.802-.628-7.604-1.256-11.81-1.9z"
      />
      <Path
        fill="#ABB8C9"
        opacity={1}
        d="M141.19 150.161c.395-.035.79-.07 1.48-.117-.124.326-.546.662-1.233 1.07-.266.073-.454-.132-.467-.4-.014-.268.22-.553.22-.553z"
      />
      <Path
        fill="#333A61"
        opacity={1}
        d="M141.17 149.737c.02.424-.214.709-.294.874-2.73-.032-5.379-.23-8.44-.437.083-1.843.58-3.678 1.176-5.878 2.08.246 4.227.5 6.765.792.518 1.434.646 2.83.794 4.65z"
      />
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

export default Social;