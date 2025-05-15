document.addEventListener('DOMContentLoaded', () => {

    const runBtn = document.getElementById('runBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const stopBtn = document.getElementById('stopBtn');
    const settingsBtn = document.getElementById('settingsBtn');
    const fileManagementBtn = document.getElementById('fileManagementBtn');
    const output = document.getElementById('output');
    const codeEditor = document.getElementById('codeEditor');

    const settingsModal = document.getElementById('settingsModal');
    const settingsCloseBtn = document.getElementById('settingsCloseBtn');
    const fileManagementModal = document.getElementById('fileManagementModal');
    const fileManagementCloseBtn = document.getElementById('fileManagementCloseBtn');

    const themeSelect = document.getElementById('themeSelect');
    const saveSettingsBtn = document.getElementById('saveSettingsBtn');
    const uploadFileBtn = document.getElementById('uploadFileBtn');
    const saveFileBtn = document.getElementById('saveFileBtn');

    settingsBtn.addEventListener('click', () => {
        settingsModal.style.display = 'block';
    });

    settingsCloseBtn.addEventListener('click', () => {
        settingsModal.style.display = 'none';
    });

    fileManagementBtn.addEventListener('click', () => {
        fileManagementModal.style.display = 'block';
    });

    fileManagementCloseBtn.addEventListener('click', () => {
        fileManagementModal.style.display = 'none';
    });

    runBtn.addEventListener('click', () => {
        const code = codeEditor.innerText;
        output.innerHTML = `Running code: <pre>${code}</pre>`;
    });

    pauseBtn.addEventListener('click', () => {
        output.innerHTML += `<br>Execution paused...`;
    });

    stopBtn.addEventListener('click', () => {
        output.innerHTML += `<br>Execution stopped.`;
    });

    saveSettingsBtn.addEventListener('click', () => {
        const theme = themeSelect.value;
        if (theme === 'dark') {
            document.body.classList.remove('light-mode');
        } else {
            document.body.classList.add('light-mode');
        }
        settingsModal.style.display = 'none';
        alert('Settings saved!');
    });

    
    uploadFileBtn.addEventListener('click', () => {
        const file = document.getElementById('fileInput').files[0];
        if (file) {
            output.innerHTML += `<br>File "${file.name}" uploaded successfully.`;
        }
    });

    saveFileBtn.addEventListener('click', () => {
        const code = codeEditor.innerText;
        const blob = new Blob([code], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'code.txt';
        link.click();
    });
})
document.getElementById('themeSelect').addEventListener('change', function () {
    if (this.value === 'light') {
        document.body.classList.add('light-mode');
        document.querySelectorAll('.modal-content').forEach(modal => modal.classList.add('light-mode'));
    } else {
        document.body.classList.remove('light-mode');
        document.querySelectorAll('.modal-content').forEach(modal => modal.classList.remove('light-mode'));
    }
});
