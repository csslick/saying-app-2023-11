// 명언 데이터
const saying_data = [
    { 
        text: "인생에서 많은 패배에 직면하겠지만 결코 패배하지 말라.",
        author: "마야 안젤루"
    },
    {
        text: "인생에서 가장 큰 영광은 넘어지지 않는 것에 있는 것이 아니라 매번 일어선다는 데 있다.",
        author: "넬슨 만델라"
    },
    {
        text: "결국, 여러분의 인생에서 중요한 것은 지나가는 세월이 아닌 생활이다.",
        author: "아브라함 링컨"
    },
    {
        text: "생활은 과감한 모험이거나 아니면 아무것도 아니다.",
        author: "헬렌 켈러"
    },
    {
        text: "많은 인생의 실패는 사람이 포기할 때 자신이 성공에 얼마나 가까이 있는지 깨닫지 못하는 것이다.",
        author: "토마스 에디슨"
    },
]

console.log(saying_data);

// 명언 데이터 초기값 화면에 출력(DOM)
const titleEl = document.querySelector('.box .text-box .title');
const authorEl = document.querySelector('.box .text-box .author');
console.log(titleEl)
console.log(saying_data[0].text); // 첫번째 text자료

// 초기값 표시
let count = 0;
titleEl.innerHTML = saying_data[count].text;
authorEl.innerHTML = saying_data[count].author;

// 인터벌 재생 함수
setInterval(function(){
    let r = 0;

    // 0 ~ 4의 랜덤 숫자 발생
    r =  Math.floor(Math.random()*5);
    console.log(`r = ${r}`);

    titleEl.innerHTML = saying_data[r].text;
    authorEl.innerHTML = saying_data[r].author;
}, 5000)
