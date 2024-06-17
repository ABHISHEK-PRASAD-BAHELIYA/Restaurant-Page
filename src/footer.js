// Create footer

const createHeaderPage = () => {
    const body = document.body;
    
    const footer = document.createElement('footer');
    const containerFooter = document.createElement('div');
    containerFooter.className = 'container';
    const socialIcons = document.createElement('div');
    socialIcons.className = 'social-icons';
    const socialLinks = ['facebook-f', 'twitter', 'instagram', 'tripadvisor'];
    socialLinks.forEach(icon => {
    const a = document.createElement('a');
        a.href = '#';
        const i = document.createElement('i');
        i.className = `fab fa-${icon}`;
        a.appendChild(i);
        socialIcons.appendChild(a);
    });
    const pFooter = document.createElement('p');
    pFooter.innerHTML = '&copy; 2024 Savory Bliss. All Rights Reserved.';
    containerFooter.appendChild(socialIcons);
    containerFooter.appendChild(pFooter);
    footer.appendChild(containerFooter);
    body.appendChild(footer);
}

export default createHeaderPage;