const navLinks = document.querySelectorAll('nav ul li a');
const content = document.getElementById('content');

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        //e.preventDefault();
        const pageId = this.dataset.page;
        // 这里简单清空原来内容并添加一个标题模拟详情页加载，实际中可以根据不同pageId加载对应HTML内容
        content.innerHTML = `<h2>详情页 - ${pageId}</h2>`;
    });
});// JavaScript Document