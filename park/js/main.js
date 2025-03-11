// 모바일 메뉴 토글 기능
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const nav = document.querySelector('nav');
    
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
    
    // 모바일 메뉴 외부 클릭 시 닫기
    document.addEventListener('click', function(event) {
        if (nav.classList.contains('active') && 
            !nav.contains(event.target) && 
            !mobileMenuBtn.contains(event.target)) {
            nav.classList.remove('active');
        }
    });
    
    // 스크롤 시 헤더 스타일 변경
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                header.style.background = 'rgba(255, 255, 255, 0.95)';
            } else {
                header.style.boxShadow = '';
                header.style.background = '';
            }
        });
    }
    
    // 스크롤 애니메이션
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .event-card, .gallery-item, .notice-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // 초기 스타일 설정
    const setInitialStyles = function() {
        const elements = document.querySelectorAll('.feature-card, .event-card, .gallery-item, .notice-item');
        
        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });
    };
    
    setInitialStyles();
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // 초기 로드 시 실행
    
    // 갤러리 이미지 클릭 시 확대 보기 (모달)
    const galleryItems = document.querySelectorAll('.gallery-item img');
    
    if (galleryItems.length > 0) {
        galleryItems.forEach(item => {
            item.addEventListener('click', function() {
                const modal = document.createElement('div');
                modal.classList.add('image-modal');
                
                const modalImg = document.createElement('img');
                modalImg.src = this.src;
                
                const closeBtn = document.createElement('span');
                closeBtn.classList.add('close-modal');
                closeBtn.innerHTML = '&times;';
                
                modal.appendChild(closeBtn);
                modal.appendChild(modalImg);
                document.body.appendChild(modal);
                
                // 모달 스타일 설정
                modal.style.position = 'fixed';
                modal.style.top = '0';
                modal.style.left = '0';
                modal.style.width = '100%';
                modal.style.height = '100%';
                modal.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
                modal.style.display = 'flex';
                modal.style.justifyContent = 'center';
                modal.style.alignItems = 'center';
                modal.style.zIndex = '1100';
                
                modalImg.style.maxWidth = '90%';
                modalImg.style.maxHeight = '90%';
                modalImg.style.objectFit = 'contain';
                
                closeBtn.style.position = 'absolute';
                closeBtn.style.top = '20px';
                closeBtn.style.right = '30px';
                closeBtn.style.color = 'white';
                closeBtn.style.fontSize = '40px';
                closeBtn.style.fontWeight = 'bold';
                closeBtn.style.cursor = 'pointer';
                
                // 닫기 버튼 클릭 이벤트
                closeBtn.addEventListener('click', function() {
                    document.body.removeChild(modal);
                });
                
                // 모달 외부 클릭 시 닫기
                modal.addEventListener('click', function(event) {
                    if (event.target === modal) {
                        document.body.removeChild(modal);
                    }
                });
            });
        });
    }
}); 