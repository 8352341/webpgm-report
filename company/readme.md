<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>NAVER</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Bulma CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css" rel="stylesheet">
    <style>
        .navbar {
            background-color: green;
            color: white;
        }
        .hero {
            background-color: #00C73C; 
            color: white;
            padding: 4rem 0;
            text-align: center;
        }

        .section {
            padding: 3rem 1.5rem;
            background-color: lightgrey;
            margin-bottom: 1rem;
            border-radius: 8px;
        }
        .box {
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            padding: 2rem;
        }
        h2 {
            color: greenyellow;
            border-bottom: 3px solid greenyellow;
            padding-bottom: 10px;
        }
        .nav-link {
            color: white !important;
            font-weight: bold;
        }
        .footer {
            background-color: white;
            padding: 1.5rem 0;
            text-align: center;
        }
    </style>
</head>
<body>
    <nav class="navbar">
        <div class="container d-flex align-items-center">
            <a class="navbar-brand" href="#" style="font-weight: bold; color: white;">NAVER</a>
            <ul class="navbar-nav d-flex flex-row align-items-center">
                <li class="nav-item" style="margin-right: 15px;"><a href="#history" class="nav-link">역사</a></li>
                <li class="nav-item" style="margin-right: 15px;"><a href="#vision" class="nav-link">비전</a></li>
                <li class="nav-item" style="margin-right: 15px;"><a href="#services" class="nav-link">사업영역</a></li>
                <li class="nav-item" style="margin-right: 15px;"><a href="#social-responsibility" class="nav-link">사회적 책임</a></li>
                <li class="nav-item" style="margin-right: 15px;"><a href="#careers" class="nav-link">채용정보</a></li>
            </ul>
        </div>
    </nav>
    
    
    
    

    <!-- Bulma 스타일의 히어로 섹션 -->
    <section class="hero">
        <div class="hero-body">
            <div class="container">
                <h1 class="title is-1 has-text-centered has-text-white">네이버를 소개합니다</h1>
                <p class="subtitle is-4 has-text-centered has-text-white">모두를 위한 기술 플랫폼</p>
            </div>
        </div>
    </section>

    <div class="container">
        <!-- 네이버의 역사 -->
        <section id="history" class="section">
            <div class="box">
                <h2 class="title is-3">네이버의 역사</h2>
                <p>네이버는 1999년에 설립되어 대한민국의 대표 포털 사이트로 성장해왔습니다. 초기에는 검색 엔진 서비스로 시작했으나, 현재는 검색, 뉴스, 블로그, 카페, 웹툰, 쇼핑 등 다양한 분야에서 디지털 생태계를 구축하고 있습니다.</p>
                <p>2013년에는 모바일 메신저 라인(LINE)을 성공적으로 출시하며 글로벌 시장에서도 큰 성공을 거두었습니다. 현재는 AI, 클라우드, 핀테크 등 새로운 기술 분야로 사업을 확장하고 있습니다.</p>
            </div>
        </section>

        <!-- 네이버의 비전 -->
        <section id="vision" class="section">
            <div class="box">
                <h2 class="title is-3">네이버의 비전과 미션</h2>
                <p>네이버의 비전은 <strong>"기술로 더 나은 세상을 만든다"</strong>입니다. 이를 위해 AI, 빅데이터, 클라우드 기술에 집중하고 있으며, 전 세계의 사용자들이 더 나은 서비스를 이용할 수 있도록 지속적인 혁신을 추구하고 있습니다.</p>
                <ul class="content">
                    <li>사용자 중심의 서비스 제공</li>
                    <li>글로벌 시장 개척</li>
                    <li>지속 가능한 성장</li>
                </ul>
            </div>
        </section>

        <!-- 네이버의 주요 사업 영역 -->
        <section id="services" class="section">
            <div class="box">
                <h2 class="title is-3">네이버의 주요 사업 영역</h2>
                <ul class="content">
                    <li>포털 서비스: 뉴스, 블로그, 카페, 지식iN 등 다양한 콘텐츠와 커뮤니티 제공</li>
                    <li>커머스: 네이버 쇼핑을 통한 간편한 구매 경험</li>
                    <li>금융 서비스: 네이버 페이(Naver Pay) 제공</li>
                    <li>콘텐츠 플랫폼: 웹툰, V LIVE, 네이버 시리즈 등</li>
                    <li>AI 및 클라우드: 클로바 AI 및 네이버 클라우드 플랫폼(NCP)</li>
                </ul>
            </div>
        </section>

        <!-- 네이버의 사회적 책임 -->
        <section id="social-responsibility" class="section">
            <div class="box">
                <h2 class="title is-3">네이버의 사회적 책임</h2>
                <p>네이버는 기업의 사회적 책임(CSR)을 다하기 위해 다양한 활동을 진행하고 있습니다.</p>
                <ul class="content">
                    <li>친환경 경영: 에너지 절약 및 탄소 배출 감소</li>
                    <li>중소기업 지원: 네이버 스마트스토어를 통한 온라인 비즈니스 지원</li>
                    <li>창작자 지원: 웹툰, 시리즈 등을 통한 창작자 지원</li>
                </ul>
            </div>
        </section>

        <!-- 네이버 채용 정보 섹션 -->
        <section id="careers" class="section">
            <div class="box">
                <h2 class="title is-3">채용 정보</h2>
                <p>네이버는 함께 성장할 혁신적이고 열정적인 인재를 찾고 있습니다.</p>
                <ul class="content">
                    <li>기술 개발</li>
                    <li>AI 연구</li>
                    <li>데이터 사이언스</li>
                    <li>마케팅</li>
                    <li>디자인</li>
                </ul>
            </div>
        </section>
    </div>

 
    <footer class="footer">
        <div class="container">
            <p>2020875015 김상훈</p>
        </div>
    </footer>

    <!-- Bootstrap JS and Popper.js -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></script>
</body>
</html>

