export interface IPost {
  nickname: string;
  title: string;
  content: string;
}

export interface IComment {
  nickname: string;
  time: string;
  content: string;
  like: number;
}

export const post: IPost = {
  nickname: "무화과",
  title: "그릭요거트는 다이어트에 도움이 될까?",
  content:
    '그릭요거트를 먹으면 포만감이 오래 지속돼 다이어트에 효과적이다. 그릭요거트는 그리스 지중해 연안에서 인공 첨가물 없이 원유를 발효시킨 요거트를 말한다. 그릭요거트는 유청(젖 성분에서 단백질과 지방을 뺀 것) 제거 여부에 따라 만드는 방법이 나뉘는데, 우리나라에서는 보통 유청을 제거하고 단백질 덩어리만 남겨 만든다. 성균관대 식품생명공학과 허진희 교수는 "그릭요거트에는 단백질과 지방이 많이 들었는데, 탄수화물에 비해 천천히 소화돼 포만감을 오래 느낄 수 있다"며 "포만감이 오래 유지되면 평소 먹는 양보다 적게 먹게 돼 다이어트에 이롭다"고 말했다. 반면, 일반 요거트는 칼로리는 적지만 포만감이 적어 탄수화물을 비롯한 당류 등이 더욱 당기게 만들 수 있다.',
};

export const comments:IComment[] = [
  {
    nickname: "베리",
    time: "10 hr ago",
    content: "이 글 보니까 그릭요거트 먹고싶어짐",
    like: 23,
  },
  {
    nickname: "베리",
    time: "10 hr ago",
    content: "이 글 보니까 그릭요거트 먹고싶어짐",
    like: 23,
  },
  {
    nickname: "베리",
    time: "10 hr ago",
    content: "이 글 보니까 그릭요거트 먹고싶어짐",
    like: 23,
  },
  {
    nickname: "베리",
    time: "10 hr ago",
    content: "이 글 보니까 그릭요거트 먹고싶어짐",
    like: 23,
  },
  {
    nickname: "베리",
    time: "10 hr ago",
    content: "이 글 보니까 그릭요거트 먹고싶어짐",
    like: 23,
  },
];
