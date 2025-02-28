import { SimpleTranslationEntries } from "#app/plugins/i18n";

/**
 * The menu namespace holds most miscellaneous text that isn't directly part of the game's
 * contents or directly related to Pokemon data. This includes menu navigation, settings,
 * account interactions, descriptive text, etc.
 */
export const menu: SimpleTranslationEntries = {
  "cancel": "취소",
  "continue": "계속하기",
  "dailyRun": "데일리 런 (베타)",
  "loadGame": "불러오기",
  "newGame": "새 게임",
  "settings": "설정",
  "selectGameMode": "게임 모드를 선택해주세요.",
  "logInOrCreateAccount": "로그인 또는 등록을 해 주세요. 개인정보를 요구하지 않습니다!",
  "username": "이름",
  "password": "비밀번호",
  "login": "로그인",
  "register": "등록",
  "emptyUsername": "이름은 비워둘 수 없습니다",
  "invalidLoginUsername": "사용할 수 없는 이름입니다",
  "invalidRegisterUsername": "이름은 알파벳, 숫자, 언더바(_)만 사용할 수 있습니다",
  "invalidLoginPassword": "사용할 수 없는 비밀번호입니다",
  "invalidRegisterPassword": "비밀번호는 여섯글자 이상이어야 합니다",
  "usernameAlreadyUsed": "이미 사용중인 이름입니다",
  "accountNonExistent": "등록되지 않은 이름입니다",
  "unmatchingPassword": "비밀번호가 틀립니다",
  "passwordNotMatchingConfirmPassword": "비밀번호가 일치하지 않습니다",
  "confirmPassword": "비밀번호 재입력",
  "registrationAgeWarning": "13세 이상입니다.",
  "backToLogin": "로그인 화면으로",
  "failedToLoadSaveData": "데이터를 불러올 수 없었습니다. 페이지를 새로고침해주세요.\n문제가 지속된다면, 디스코드 #Announcements 채널을 확인해주세요.",
  "sessionSuccess": "세션 불러오기 성공.",
  "failedToLoadSession": "세션을 불러올 수 없었습니다.\n파일이 손상되었을 수 있습니다.",
  "boyOrGirl": "너는 남자니?\n아니면 여자니?",
  "boy": "남자",
  "girl": "여자",
  "evolving": "…오잉!?\n{{pokemonName}}의 모습이…!",
  "stoppedEvolving": "얼라리…?\n{{pokemonName}}의 변화가 멈췄다!",
  "pauseEvolutionsQuestion": "{{pokemonName}}[[를]] 진화하지 않게 만드시겠습니까?\n포켓몬 화면에서 다시 활성화시킬 수 있습니다.",
  "evolutionsPaused": "{{pokemonName}}의 진화가 비활성화되었다.",
  "evolutionDone": "축하합니다! {{pokemonName}}[[는]]\n{{evolvedPokemonName}}[[로]] 진화했습니다!",
  "dailyRankings": "일간 랭킹",
  "weeklyRankings": "주간 랭킹",
  "noRankings": "랭킹 정보 없음",
  "positionIcon": "#",
  "usernameScoreboard": "이름",
  "score": "점수",
  "wave": "웨이브",
  "loading": "로딩 중…",
  "loadingAsset": "Loading asset: {{assetName}}",
  "playersOnline": "플레이어 온라인",
  "yes":"예",
  "no":"아니오",
  "disclaimer": "면책 조항",
  "disclaimerDescription": "이 게임은 완전히 개발되지 않았습니다- (세이브 데이터 소실을 포함) 플레이에 지장을 주는 문제가 생길 수 있으며,\n공지 없이 업데이트가 진행 혹은 중지될 수 있습니다.",
  "general": "일반",
  "display": "디스플레이",
  "audio": "오디오",
  "gamepad": "게임패드",
  "keyboard": "키보드",
  "gameSpeed": "게임 속도",
  "hpBarSpeed": "HP 속도",
  "expGainsSpeed": "경험치 속도",
  "expPartyDisplay": "파티 경험치 표시",
  "skipSeenDialogues": "본 대화 생략",
  "battleStyle": "배틀 방식",
  "enableRetries": "재도전 허용",
  "tutorials": "튜토리얼",
  "touchControls": "터치 컨트롤",
  "vibrations": "진동",
  "normal": "보통",
  "fast": "빠르게",
  "faster": "더 빠르게",
  "skip": "스킵",
  "levelUpNotifications": "레벨업 알림",
  "on": "설정",
  "off": "해제",
  "switch": "교체허용",
  "set": "해제",
  "auto": "자동",
  "disabled": "비활성",
  "language": "언어",
  "change": "변경",
  "uiTheme": "UI 테마",
  "default": "기본",
  "legacy": "레거시",
  "windowType": "윈도우 타입",
  "moneyFormat": "소지금 표시",
  "damageNumbers": "대미지 표시",
  "simple": "심플",
  "fancy": "팬시",
  "abbreviated": "축약",
  "moveAnimations": "기술 애니메이션",
  "showStatsOnLevelUp": "레벨업 능력치 표시",
  "candyUpgradeNotification": "사탕 업그레이드 알림",
  "passivesOnly": "패시브만",
  "candyUpgradeDisplay": "사탕 업그레이드 표시",
  "icon": "아이콘",
  "animation": "애니메이션",
  "moveInfo": "기술 정보",
  "showMovesetFlyout": "상대 기술 보기",
  "showArenaFlyout": "배틀 효과 보기",
  "showTimeOfDayWidget": "시간 위젯",
  "timeOfDayAnimation": "시간 애니메이션",
  "bounce": "바운스",
  "back": "백",
  "spriteSet": "스프라이트",
  "consistent": "기본",
  "mixedAnimated": "믹스",
  "fusionPaletteSwaps": "융합 팔레트 스왑",
  "playerGender": "플레이어 성별",
  "typeHints": "타입 힌트",
  "masterVolume": "마스터 볼륨",
  "bgmVolume": "BGM 볼륨",
  "seVolume": "SE 볼륨",
  "musicPreference": "음악 설정",
  "mixed": "믹스",
  "gamepadPleasePlug": "게임패드를 연결하거나 버튼을 입력하세요",
  "delete": "삭제",
  "keyboardPleasePress": "키보드의 키를 입력하세요",
  "reset": "리셋",
  "requireReload": "새로고침 필요",
  "action": "액션",
  "pressToBind": "할당을 위해 입력하세요",
  "pressButton": "버튼을 입력하세요",
  "buttonUp": "위",
  "buttonDown": "아래",
  "altButtonUp": "위 (대체)",
  "buttonLeft": "왼쪽",
  "buttonRight": "오른쪽",
  "buttonAction": "액션",
  "buttonMenu": "메뉴",
  "buttonSubmit": "확인",
  "altButtonDown": "아래 (대체)",
  "altButtonLeft": "왼쪽 (대체)",
  "altButtonRight": "오른쪽 (대체)",
  "altButtonAction": "액션 (대체)",
  "buttonCancel": "취소",
  "altButtonCancel": "취소 (대체)",
  "altButtonMenu": "메뉴 (대체)",
  "buttonStats": "스탯",
  "altButtonStats": "스탯 (대체)",
  "buttonCycleForm": "폼 변환",
  "altButtonCycleForm": "폼 변환 (대체)",
  "buttonCycleShiny": "특별한 색 변환",
  "altButtonCycleShiny": "특별한 색 변환 (대체)",
  "buttonCycleGender": "성별 변환",
  "altButtonCycleGender": "성별 변환 (대체)",
  "buttonCycleAbility": "특성 변환",
  "altButtonCycleAbility": "특성 변환 (대체)",
  "buttonCycleNature": "성격 변환",
  "altButtonCycleNature": "성격 변환 (대체)",
  "buttonCycleVariant": "색상 변환",
  "altButtonCycleVariant": "색상 변환 (대체)",
  "buttonSpeedUp": "속도 올리기",
  "altButtonSpeedUp": "속도 올리기 (대체)",
  "buttonSlowDown": "속도 내리기",
  "altButtonSlowDown": "속도 내리기 (대체)",
  "altButtonSubmit": "확인 (대체)",
} as const;
