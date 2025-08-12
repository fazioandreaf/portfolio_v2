"use client";

import Header from './components/Header';
import { translations } from './i18n/translations';
import { useLanguage } from './contexts/LanguageContext';
import { Download, Mail, Linkedin, Github, ExternalLink, Youtube } from 'lucide-react';
import ProfileImage from './components/ProfileImage';

// Technology-specific icons
const ReactIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12,10.11A1.87,1.87,0,1,1,10.13,12,1.88,1.88,0,0,1,12,10.11M7.37,20c.63.38,2-.2,3.6-1.7a24.22,24.22,0,0,1-1.51-1.9A22.7,22.7,0,0,1,7.06,16c-.51,2.14-.32,3.61.31,4m.71-5.74-.29-.51a7.91,7.91,0,0,0-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17,9,12.6,9,12,9s-1.17,0-1.71,0c-.29.47-.61.94-.91,1.47L8.57,12l.81,1.5c.3.53.62,1,.91,1.47.54,0,1.11,0,1.71,0s1.17,0,1.71,0c.29-.47.61-.94.91-1.47M12,6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0,10.44c.19-.22.39-.45.59-.72H11.41c.2.27.4.5.59.72M16.62,4c-.62-.38-2,.2-3.59,1.7a24.22,24.22,0,0,1,1.51,1.9,22.7,22.7,0,0,1,2.4.36c.51-2.14.32-3.61-.32-4m-.7,5.74.29.51a7.91,7.91,0,0,0,.29-.86c-.27-.06-.57-.11-.88-.16l.3.51m1.45-7c1.47.84,1.63,3.05,1,5.63,2.54.75,4.37,2,4.37,3.68s-1.83,2.93-4.37,3.68c.62,2.58.46,4.79-1,5.63s-3.45-.12-5.37-1.95c-1.92,1.83-3.91,2.79-5.38,1.95s-1.62-3-1-5.63c-2.54-.75-4.37-2-4.37-3.68S3.08,9.07,5.62,8.32c-.62-2.58-.46-4.79,1-5.63s3.46.12,5.38,1.95c1.92-1.83,3.91-2.79,5.37-1.95M17.08,12A22.51,22.51,0,0,1,18,14.26c2.1-.63,3.28-1.53,3.28-2.26S20.07,10.37,18,9.74A22.51,22.51,0,0,1,17.08,12M6.92,12A22.51,22.51,0,0,1,6,9.74c-2.1.63-3.28,1.53-3.28,2.26S3.93,13.63,6,14.26A22.51,22.51,0,0,1,6.92,12m9,2.26-.3.51c.31,0,.61-.1.88-.16a7.91,7.91,0,0,0-.29-.86l-.29.51M13,18.3c1.59,1.5,3,2.08,3.59,1.7s.83-1.82.32-4a22.7,22.7,0,0,1-2.4.36A24.22,24.22,0,0,1,13,18.3M8.08,9.74l.3-.51c-.31,0-.61.1-.88.16a7.91,7.91,0,0,0,.29.86l.29-.51M11,5.7C9.38,4.2,8,3.62,7.37,4s-.82,1.82-.31,4a22.7,22.7,0,0,1,2.4-.36A24.22,24.22,0,0,1,11,5.7Z"/>
  </svg>
);

const JavaScriptIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 256 256" fill="currentColor">
    <path d="M0 0h256v256H0V0z" fill="#F7DF1E"/>
    <path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574"/>
  </svg>
);

const TypeScriptIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
  </svg>
);

const NodeIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247L8.455,22.09c-0.438-0.245-0.224-0.332-0.08-0.383c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.443,1.339c0.082,0.045,0.197,0.045,0.272,0l9.594-5.569c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-9.593-5.569c-0.081-0.047-0.189-0.047-0.271,0L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v11.15c0,0.097,0.054,0.189,0.139,0.235l2.454,1.368c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.316-0.922-0.938-0.922-1.604V6.921c0-0.666,0.353-1.288,0.922-1.604l9.594-5.569c0.557-0.308,1.296-0.308,1.848,0l9.594,5.569c0.57,0.316,0.924,0.938,0.924,1.604v11.15c0,0.666-0.354,1.288-0.924,1.604L12.922,23.754C12.642,23.916,12.324,24,11.998,24zM19.099,13.993c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
  </svg>
);

const GitIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.546 10.93 13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.881.721-2.604 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
  </svg>
);

const LaravelIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 32 32" fill="currentColor">
    <path d="M13.143 23.585l10.46-5.97-4.752-2.736-10.453 6.019zM24.084 11.374l-4.757-2.736v5.417l4.758 2.737zM24.559 5.078l-4.756 2.736 4.756 2.736 4.755-2.737zM9.911 18.928l2.76-1.589v-11.934l-4.758 2.738v11.934zM7.437 1.846l-4.756 2.737 4.756 2.737 4.753-2.737zM2.204 5.406v18.452l10.464 6.022v-5.471l-5.472-3.096c-.018-.013-.032-.027-.051-.039-.014-.013-.030-.023-.044-.034l-.001-.003c-.015-.015-.028-.031-.039-.049l-.001-.001c-.014-.013-.025-.028-.035-.045l-.001-.001h-.003c-.008-.015-.016-.035-.024-.055l-.001-.004c-.007-.015-.015-.032-.022-.051l-.001-.003c-.004-.020-.008-.045-.010-.070l-.0-.002c-.003-.015-.006-.033-.008-.051l-.0-.001v-12.759l-2.757-1.59zM24.085 23.857v-5.422l-10.464 5.974v5.47zM29.789 14.055v-5.417l-4.756 2.737v5.417zM30.725 7.69c0.011 0.038 0.018 0.081 0.018 0.126v0 6.513c-0 0.176-0.095 0.329-0.237 0.411l-0.002 0.001-5.468 3.149v6.241c-0 0.175-0.095 0.328-0.236 0.411l-0.002 0.001-11.416 6.57c-0.024 0.013-0.052 0.025-0.081 0.033l-0.003 0.001-0.030 0.013c-0.036 0.011-0.078 0.017-0.121 0.017s-0.085-0.006-0.125-0.018l0.003 0.001c-0.015-0.004-0.027-0.009-0.039-0.016l0.001 0.001c-0.031-0.011-0.057-0.021-0.082-0.033l0.004 0.002-11.413-6.57c-0.144-0.084-0.239-0.237-0.239-0.412v0-19.548c0-0.044 0.007-0.087 0.019-0.127l-0.001 0.003c0.004-0.015 0.013-0.025 0.018-0.040 0.009-0.029 0.019-0.053 0.030-0.076l-0.001 0.003c0.008-0.016 0.018-0.030 0.029-0.042l-0 0 0.042-0.057 0.047-0.034c0.018-0.015 0.034-0.030 0.052-0.043h0.001l5.708-3.285c0.068-0.040 0.15-0.064 0.237-0.064s0.169 0.024 0.239 0.065l-0.002-0.001 5.71 3.285c0.019 0.013 0.035 0.027 0.051 0.042l-0-0 0.048 0.034c0.016 0.018 0.025 0.038 0.042 0.057 0.012 0.012 0.022 0.026 0.031 0.041l0.001 0.001c0.010 0.020 0.020 0.044 0.029 0.069l0.001 0.004 0.016 0.040c0.011 0.035 0.018 0.076 0.018 0.118 0 0.002 0 0.004-0 0.006v-0 12.208l4.756-2.737v-6.241c0-0.001 0-0.002 0-0.002 0-0.043 0.006-0.085 0.017-0.125l-0.001 0.003c0.004-0.013 0.013-0.025 0.016-0.040 0.010-0.030 0.020-0.054 0.032-0.078l-0.002 0.004c0.009-0.015 0.023-0.025 0.032-0.042 0.015-0.019 0.027-0.038 0.042-0.054 0.014-0.013 0.029-0.025 0.045-0.035l0.001-0.001c0.018-0.013 0.033-0.029 0.052-0.040h0.001l5.708-3.286c0.068-0.040 0.15-0.064 0.237-0.064s0.169 0.024 0.239 0.065l-0.002-0.001 5.708 3.286c0.020 0.013 0.034 0.027 0.053 0.039 0.015 0.013 0.032 0.023 0.046 0.035 0.016 0.018 0.028 0.038 0.043 0.056 0.011 0.012 0.021 0.026 0.030 0.040l0.001 0.001c0.012 0.022 0.022 0.047 0.030 0.073l0.001 0.003c0.008 0.012 0.014 0.025 0.019 0.039l0 0.001z"/>
  </svg>
);

const ReduxIcon = () => (
  <svg className="w-8 h-8" viewBox="0 -0.5 25 25" fill="currentColor">
    <path d="m17.54 16.745c.893-.089 1.585-.837 1.585-1.746 0-.036-.001-.072-.003-.108v.005c-.047-.963-.834-1.726-1.801-1.736h-.065c-.968.036-1.739.829-1.739 1.802 0 .022 0 .044.001.067v-.003c.026.473.22.897.522 1.217l-.001-.001c-1.187 2.214-3.001 3.96-5.204 5.031l-.069.03c-1.192.66-2.614 1.048-4.127 1.048-.383 0-.761-.025-1.13-.073l.044.005c-1.361-.131-2.533-.844-3.277-1.884l-.009-.014c-.537-.755-.858-1.695-.858-2.711 0-.837.218-1.623.601-2.305l-.012.024c.547-1.036 1.293-1.898 2.194-2.562l.021-.014c-.171-.453-.324-.999-.432-1.56l-.011-.066c-4.683 3.349-4.208 7.93-2.786 10.095 1.243 1.586 3.159 2.596 5.311 2.596.098 0 .195-.002.292-.006h-.014c.035.001.077.001.119.001.647 0 1.276-.075 1.88-.216l-.056.011c4.008-.734 7.29-3.317 8.974-6.814l.032-.074z"/>
    <path d="m23.18 12.799c-2.403-2.74-5.91-4.46-9.82-4.46-.119 0-.239.002-.357.005h.018-.538c-.283-.567-.86-.95-1.526-.95-.02 0-.039 0-.059.001h.003-.039c-.966.014-1.744.8-1.744 1.768 0 .029.001.057.002.085v-.004c.045.963.832 1.728 1.8 1.738h.079c.714-.028 1.317-.472 1.577-1.094l.004-.012h.585c2.554.003 4.924.787 6.884 2.128l-.042-.027c1.531.98 2.713 2.388 3.392 4.055l.021.058c.26.542.411 1.178.411 1.849 0 .71-.169 1.38-.47 1.972l.011-.025c-.777 1.586-2.379 2.658-4.231 2.658-.068 0-.135-.001-.202-.004h.01c-1.137-.024-2.21-.274-3.183-.707l.052.021c-.379.316-1.011.836-1.47 1.153 1.214.596 2.638.959 4.143.994h.012c.059.002.128.003.197.003 2.552 0 4.787-1.355 6.026-3.384l.018-.031c.342-.811.54-1.753.54-2.742 0-1.98-.796-3.774-2.085-5.079l.001.001-.015.032z"/>
    <path d="m6.844 17.316c.044.964.833 1.731 1.803 1.738h.064c.968-.033 1.741-.827 1.741-1.8 0-.99-.799-1.794-1.788-1.801h-.067c-.01-.001-.022-.001-.033-.001-.073 0-.143.011-.209.033l.005-.001c-1.07-1.741-1.703-3.85-1.703-6.107 0-.364.016-.724.049-1.079l-.003.046c.091-1.906.791-3.633 1.907-5.007l-.012.016c.991-1.071 2.387-1.753 3.944-1.803h.009c3.412-.064 4.835 4.188 4.945 5.878l1.582.473c-.368-5.181-3.59-7.901-6.671-7.901-3.132.163-5.731 2.27-6.622 5.131l-.014.052c-.438 1.262-.692 2.716-.692 4.229 0 2.588.741 5.003 2.021 7.044l-.032-.055c-.143.216-.228.481-.228.766 0 .053.003.105.009.156l-.001-.006z"/>
  </svg>
);

const PWAIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

const SalesforceIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.1823 12.0413C15.2625 11.9197 15.3033 11.7476 15.3033 11.5292C15.3033 11.3111 15.2625 11.1393 15.1826 11.019C15.103 10.8999 14.983 10.8419 14.8157 10.8419C14.648 10.8419 14.5286 10.8999 14.4506 11.019C14.3716 11.1393 14.3315 11.3111 14.3315 11.5292C14.3315 11.7476 14.3716 11.92 14.4506 12.0413C14.5286 12.1619 14.648 12.2202 14.8157 12.2202C14.983 12.2202 15.103 12.1616 15.1823 12.0413Z"/>
    <path d="M19.5355 11.0191C19.4838 11.0977 19.4503 11.1987 19.4324 11.3199H20.3419C20.3328 11.2031 20.3099 11.0977 20.2573 11.0191C20.178 10.9 20.0674 10.8342 19.9 10.8342C19.7326 10.8342 19.6136 10.8997 19.5355 11.0191Z"/>
    <path d="M9.32318 11.0191C9.27148 11.0977 9.23824 11.1987 9.22008 11.3199H10.1295C10.1204 11.2031 10.0975 11.0977 10.0452 11.0191C9.96563 10.9 9.85499 10.8342 9.68765 10.8342C9.5203 10.8342 9.40121 10.8997 9.32318 11.0191Z"/>
    <path d="M6.39015 12.0794C6.40706 12.1051 6.41395 12.1151 6.46379 12.1549C6.46284 12.1546 6.57817 12.2452 6.83766 12.2295C7.02004 12.2185 7.18175 12.1837 7.18175 12.1837V11.604C7.18175 11.604 7.01848 11.577 6.83578 11.5745C6.57568 11.5711 6.46507 11.667 6.46599 11.6666C6.3892 11.7209 6.35223 11.8014 6.35223 11.9136C6.35223 11.9844 6.36506 12.0402 6.39015 12.0794Z"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M12.9449 4.78232C11.8524 4.78232 10.8646 5.24084 10.1551 5.98012C9.37442 4.9594 8.14311 4.30065 6.75761 4.30065C4.39778 4.30065 2.48453 6.21106 2.48453 8.56775C2.48453 9.17104 2.61021 9.74487 2.83615 10.2648C1.73866 10.9063 1 12.1053 1 13.4786C1 15.5279 2.64405 17.1888 4.672 17.1887C4.93087 17.1887 5.18315 17.1618 5.42665 17.1101C5.98385 18.6217 7.43547 19.6993 9.13874 19.6993C10.7743 19.6993 12.1777 18.706 12.78 17.2891C13.2382 17.5126 13.7528 17.6381 14.2969 17.6381C15.5965 17.6381 16.7288 16.922 17.3229 15.8622C17.6305 15.9243 17.9434 15.9555 18.2572 15.9553C20.8765 15.9553 23 13.8133 23 11.1708C23 8.52859 20.8765 6.38655 18.2572 6.38655C17.5743 6.38655 16.9253 6.5323 16.3389 6.79427C15.6642 5.59211 14.3971 4.78232 12.9449 4.78232Z"/>
  </svg>
);

const JQueryIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

const ContentfulIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.875 16.361c-.043-.048-1.067-1.18-2.365-1.19-.68 0-1.288.283-1.815.858-.773.842-2.35 1.85-4.25 1.921-1.598.059-3.085-.548-4.423-1.805-1.644-1.544-2.155-4.016-1.302-6.297.834-2.23 2.752-3.616 5.131-3.707l.044-.004c.024-.003 2.302-.258 4.325 1.548.17.185 1.154 1.197 2.475 1.228.823.018 1.586-.336 2.27-1.055.602-.632.87-1.342.797-2.112-.154-1.61-1.806-2.876-2.03-3.04-.212-.184-1.878-1.578-4.476-2.294-2.52-.695-6.42-.853-10.685 2.349a7.31 7.31 0 0 0-.557.49c-.28.208-.523.462-.716.753a12.469 12.469 0 0 0-3.064 8.677c.207 6.283 5.265 9.293 5.646 9.51.262.17 2.906 1.81 6.495 1.809 2.106 0 4.538-.565 7.005-2.322.248-.138 1.714-1.012 2.103-2.52.23-.894.042-1.815-.562-2.737l-.046-.06zm-16.932 1.97c0-1.09.887-1.977 1.977-1.977s1.977.886 1.977 1.977c0 1.09-.887 1.977-1.977 1.977s-1.977-.887-1.977-1.977zm.139-13.657c.236-.275.451-.498.628-.67a1.965 1.965 0 0 1 1.088-.329c1.09 0 1.977.887 1.977 1.977S7.888 7.63 6.798 7.63s-1.977-.887-1.977-1.977c0-.356.096-.69.261-.978zM13.249.999c3.954 0 6.657 2.336 6.826 2.486l.043.034c.42.3 1.532 1.301 1.63 2.324.044.469-.126.898-.52 1.313-.477.5-.983.752-1.504.738-.964-.019-1.743-.887-1.76-.905l-.042-.044c-2.292-2.063-4.83-1.855-5.13-1.822a6.82 6.82 0 0 0-3.012.818 3 3 0 0 0-2.34-3.214C9.543 1.45 11.516.999 13.248.999zM3.884 6.34a3 3 0 0 0 2.914 2.31c.122 0 .24-.01.358-.024a7.336 7.336 0 0 0-.39.866c-.75 2.003-.59 4.14.359 5.854-.068-.005-.136-.01-.205-.01a2.999 2.999 0 0 0-2.967 2.6 10.075 10.075 0 0 1-1.7-5.288 11.43 11.43 0 0 1 1.63-6.309zM21.497 18.9c-.3 1.174-1.615 1.89-1.627 1.896l-.058.036c-6.287 4.499-12.137.667-12.382.502l-.036-.022a2.848 2.848 0 0 1-.034-.02 2.998 2.998 0 0 0 2.543-3.228c1.124.64 2.336.951 3.58.906 2.214-.083 4.057-1.264 4.962-2.25.327-.356.67-.53 1.048-.53h.005c.762.004 1.46.688 1.593.826.421.658.558 1.291.406 1.884z"/>
  </svg>
);

const EcommerceIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
  </svg>
);

const FashionIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const PerformanceIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.5 2.54l2.6 1.53c.56-1.24.9-2.62.9-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z"/>
  </svg>
);

const ArchitectureIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10z"/>
  </svg>
);

const AgileIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

export default function CVPage() {
  const { language, mounted } = useLanguage();
  const t = mounted ? translations[language] : translations.en;

  const skills = [
    { name: 'React', icon: <ReactIcon /> },
    { name: 'JavaScript', icon: <JavaScriptIcon /> },
    { name: 'TypeScript', icon: <TypeScriptIcon /> },
    { name: 'Node.js', icon: <NodeIcon /> },
    { name: 'PWA', icon: <PWAIcon /> },
    { name: 'Redux', icon: <ReduxIcon /> },
    { name: 'Salesforce Commerce Cloud', icon: <SalesforceIcon /> },
    { name: 'Laravel', icon: <LaravelIcon /> },
    { name: 'jQuery', icon: <JQueryIcon /> },
    { name: 'Contentful CMS', icon: <ContentfulIcon /> },
    { name: 'Git', icon: <GitIcon /> },
    { name: 'E-commerce', icon: <EcommerceIcon /> },
    { name: 'Luxury Fashion', icon: <FashionIcon /> },
    { name: 'Performance Optimization', icon: <PerformanceIcon /> },
    { name: 'Headless Architecture', icon: <ArchitectureIcon /> },
    { name: 'Agile', icon: <AgileIcon /> },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {t.hero.title}
              </h1>
              <p className="text-xl md:text-2xl text-secondary-text">
                {t.hero.subtitle}
              </p>
              <p className="text-lg text-secondary-text max-w-2xl">
                {t.hero.description}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/andrea-fazio_en.pdf" 
                download 
                className="bg-primary text-black px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                {t.hero.downloadCV}
              </a>
              <a 
                href="mailto:fazioandrea.f@gmail.com" 
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-black transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                {t.hero.contactMe}
              </a>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <ProfileImage />
          </div>
        </div>
      </section>

      {/* Experience & Skills Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-divider">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <div className="text-center lg:text-left mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.experience.title}</h2>
              <p className="text-secondary-text text-lg">
                {t.experience.description}
              </p>
            </div>
            
            <div className="space-y-8">
              {t.experiences.map((experience, index) => (
                <div key={index} className="relative">
                  <div className="bg-divider p-6 rounded-lg border border-transparent hover:border-primary transition-colors duration-300">
                    <div className="text-primary font-semibold mb-2">{experience.period}</div>
                    <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
                    <div className="text-primary font-medium mb-3">{experience.company}</div>
                    <p className="text-secondary-text">{experience.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <div className="text-center lg:text-left mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.skills.title}</h2>
              <p className="text-secondary-text text-lg">
                {t.skills.description}
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {skills.map((skill) => (
                <div key={skill.name} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-divider flex items-center justify-center text-2xl group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                    {skill.icon}
                  </div>
                  <p className="text-sm font-medium text-secondary-text group-hover:text-primary transition-colors duration-300">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-divider">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.projects.title}</h2>
          <p className="text-secondary-text text-lg max-w-2xl mx-auto">
            {t.projects.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.projectList.map((project, index) => (
            <div key={index} className="bg-divider rounded-lg p-6 border border-transparent hover:border-primary transition-colors duration-300 group">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  {'videoLink' in project && project.videoLink && (
                    <a 
                      href={project.videoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-secondary-text hover:text-primary transition-colors duration-300"
                    >
                      <Youtube className="w-5 h-5" />
                    </a>
                  )}
                  <ExternalLink className="w-5 h-5 text-secondary-text group-hover:text-primary transition-colors duration-300" />
                </div>
              </div>
              <p className="text-secondary-text mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-background text-primary text-sm rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-divider">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.certifications.title}</h2>
          <p className="text-secondary-text text-lg max-w-2xl mx-auto">
            {t.certifications.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.certificationList.map((cert, index) => (
            <div key={index} className="bg-divider rounded-lg p-6 border border-transparent hover:border-primary transition-colors duration-300">
              <h3 className="text-lg font-bold mb-2">{cert.name}</h3>
              <p className="text-primary font-medium mb-1">{cert.issuer}</p>
              <p className="text-secondary-text text-sm">{cert.date}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-divider">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.contact.title}</h2>
          <p className="text-secondary-text text-lg max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </div>
        
        <div className="flex justify-center space-x-8">
          <a href="mailto:fazioandrea.f@gmail.com" className="flex items-center gap-2 text-secondary-text hover:text-primary transition-colors duration-300">
            <Mail className="w-6 h-6" />
            <span>fazioandrea.f@gmail.com</span>
          </a>
          <a href="https://www.linkedin.com/in/fazioandrea-f/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-secondary-text hover:text-primary transition-colors duration-300">
            <Linkedin className="w-6 h-6" />
            <span>LinkedIn (476+ connections)</span>
          </a>
          <a href="https://github.com/andrea-fazio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-secondary-text hover:text-primary transition-colors duration-300">
            <Github className="w-6 h-6" />
            <span>GitHub</span>
          </a>
        </div>
      </section>
    </div>
  );
}
