
module.exports = {
  types: [
    { value: 'feat',     name: 'feat:     새로운 기능 추가' },
    { value: 'fix',      name: 'fix:      버그 수정' },
    { value: 'docs',     name: 'docs:     문서 수정' },
    { value: 'style',    name: 'style:    코드 스타일/포맷팅 (기능 변경 없음)' },
    { value: 'refactor', name: 'refactor: 리팩토링 (기능 변화 없음)' },
    { value: 'perf',     name: 'perf:     성능 개선' },
    { value: 'test',     name: 'test:     테스트 추가/수정' },
    { value: 'chore',    name: 'chore:    빌드/배포 작업, 기타 잡일' }
  ],
  messages: {
    type: '변경 사항의 유형을 선택하세요:',
    scope: '변경 범위 (선택사항):',
    customScope: '변경 범위를 직접 입력하세요:',
    subject: '변경 내용을 간단히 설명하세요:',
    body: '변경 이유를 자세히 설명하세요 (선택사항). 줄바꿈은 | 문자로 구분:',
    breaking: 'BREAKING CHANGES (선택사항):',
    footer: '이 변경과 관련된 이슈 번호 (예: #123):',
    confirmCommit: '위 내용으로 커밋하시겠습니까?'
  },
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
};
