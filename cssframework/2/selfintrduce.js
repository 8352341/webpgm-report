document.addEventListener('DOMContentLoaded', function() {
    var introduction = document.getElementById('introduction');

    var content = `
        <div class="card">
            <div class="card-body">
                <h1 class="title is-3">안녕하세요!</h1>
                <p class="content">
                    저는 김상훈 입니다. 저는 경성대학교의 학생이고 지금은 웹 개발을 배우고 있습니다.
                </p>
                <div class="notification is-primary">
                    취미: 독서, 게임, 코딩
                </div>
                <div class="alert alert-info" role="alert">
                    연락처: khj63416@naver.com
                </div>
            </div>
        </div>
    `;

    introduction.innerHTML = content;
});
