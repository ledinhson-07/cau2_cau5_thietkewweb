/**
 * script.js — JavaScript thuần cho menu điều hướng trên di động
 *
 * Tailwind CSS là framework CSS thuần túy (utility-first), KHÔNG có sẵn
 * hành vi JavaScript như Bootstrap (Bootstrap có collapse, dropdown, modal... tự động).
 * Do đó, cần viết JS riêng để xử lý tương tác như toggle menu mobile.
 *
 * So sánh:
 * - Bootstrap: chỉ cần thêm data-bs-toggle="collapse" là menu tự đóng/mở
 * - Tailwind: phải viết JS thủ công để toggle class hidden/flex
 */

document.addEventListener('DOMContentLoaded', function () {

    // ===== TOGGLE MENU MOBILE =====
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    hamburgerBtn.addEventListener('click', function () {
        // Toggle class hidden/flex để hiển thị/ẩn menu
        // Đây là minh chứng Tailwind cần JS riêng để tạo hành vi,
        // khác với Bootstrap có sẵn component JS
        if (mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.add('flex', 'flex-col');
        } else {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex', 'flex-col');
        }
    });

    // Đóng menu mobile khi click vào link (UX tốt hơn)
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex', 'flex-col');
        });
    });

    // ===== ĐÓNG MENU KHI CLICK BÊN NGOÀI =====
    document.addEventListener('click', function (event) {
        const isClickInsideMenu = mobileMenu.contains(event.target);
        const isClickOnButton = hamburgerBtn.contains(event.target);

        if (!isClickInsideMenu && !isClickOnButton && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex', 'flex-col');
        }
    });

    // ===== HIỆU ỨNG NHỎ: Thay đổi header khi scroll =====
    const header = document.querySelector('header');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('shadow-lg');
            header.classList.remove('shadow-md');
        } else {
            header.classList.add('shadow-md');
            header.classList.remove('shadow-lg');
        }
    });

});
