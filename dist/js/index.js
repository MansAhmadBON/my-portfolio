window.onload = function () {
    const $setting = document.querySelector('.settings');
    const $settingsCtrl = document.querySelector('.settings-ctrl');
    const $sectionsHeaderOdd = document.querySelectorAll('.section-header--odd');
    const $sectionsContentOdd = document.querySelectorAll('.section-content--odd');
    const $mainBox = document.querySelector('.main-box');
    const $sectionsHeaderEven = document.querySelectorAll('.section-header--even');
    const $sectionsContentEven = document.querySelectorAll('.section-content--even');

    $settingsCtrl.addEventListener('click', () => {
        $setting.classList.add('settings--active');
        $settingsCtrl.classList.add('settings-ctrl--hide');
    });

    document.querySelector('.close').addEventListener('click', () => {
        $setting.classList.remove('settings--active');
        $settingsCtrl.classList.remove('settings-ctrl--hide');
    });


    //DARK THEME
    document.querySelector('.theme__variant--dark').addEventListener('click', () => {
        $sectionsHeaderOdd.forEach(sectionHeader => sectionHeader.classList.add('dark-theme--section-header--odd'));
        $sectionsContentOdd.forEach(sectionContent => sectionContent.classList.add('dark-theme--section-content--odd'));
        $mainBox.classList.add('dark-theme--section-content--odd');
        $setting.classList.add('dark-theme--section-content--odd');
        $sectionsHeaderEven.forEach(sectionHeader => sectionHeader.classList.add('dark-theme--section-header--even'));
        $sectionsContentEven.forEach(sectionContent => sectionContent.classList.add('dark-theme--section-content--even'));
    });

    //LIGHT THEME
    document.querySelector('.theme__variant--light').addEventListener('click', () => {
        $sectionsHeaderOdd.forEach(sectionHeader => sectionHeader.classList.remove('dark-theme--section-header--odd'));
        $sectionsContentOdd.forEach(sectionContent => sectionContent.classList.remove('dark-theme--section-content--odd'));
        $mainBox.classList.remove('dark-theme--section-content--odd');
        $setting.classList.remove('dark-theme--section-content--odd');
        $sectionsHeaderEven.forEach(sectionHeader => sectionHeader.classList.remove('dark-theme--section-header--even'));
        $sectionsContentEven.forEach(sectionContent => sectionContent.classList.remove('dark-theme--section-content--even'));
    })
};
