function toggleContent(button, contentId) {
    const content = document.getElementById(contentId);
    const box = content.parentElement;

    if (content.classList.contains('hidden')) {
        box.querySelector('.content:not(.hidden)').classList.add('hidden');
        content.classList.remove('hidden');
        
    } else {
        content.classList.add('hidden');
        box.querySelector('.content').classList.remove('hidden');
    }
}
