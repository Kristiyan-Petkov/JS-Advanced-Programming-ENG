var forumPost = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};

result.call(forumPost, 'upvote');
result.call(forumPost, 'downvote');

var answer = result.call(forumPost, 'score');
var expected = [127, 127, 0, 'controversial'];
compareScore(expected, answer);

// 50 Downvotes
for (let i = 0; i < 50; i++) {
    result.call(forumPost, 'downvote');
}
answer = result.call(forumPost, 'score');
expected = [139, 189, -50, 'unpopular'];

function solution(action) {
    if (action == 'upvote') {
        this.upvotes++;
    } else if (action == 'downvote') {
        this.downvotes++;
    } else if (action == 'score') {
        let upV = this.upvotes;
        let dwV = this.downvotes;
        if (upV + dwV > 50) {
            if (upV > dwV){
                upV += Math.ceil(upV * 0.25);
                dwV += Math.ceil(upV * 0.25);
            } else {
                upV += Math.ceil(dwV * 0.25);
                dwV += Math.ceil(dwV * 0.25);
            }
        }
        let balance = upV - dwV;
        let total = this.upvotes + this.downvotes;
        let type = String;
        if (balance < 0) {
            type = 'unpopular';
        } else if (total <= 10) {
            type = 'new';
        } else if (upV > dwV * 2) {
            type = 'hot';
        } else if (total > 100){
            type = 'controversial';
        }
        let arr = [upV, dwV, balance, type];
        return arr;
    }
}