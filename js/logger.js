
class Logger {
    constructor() {
        this.logContainer = document.getElementById('liveLog');
        this.maxLines = 10;
        this.log('[BOOT] Logger initialized.');
    }

    log(message) {
        if (!this.logContainer) return;

        const now = new Date();
        const timestamp = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;

        const newLine = document.createElement('div');
        newLine.className = 'log-line';
        newLine.textContent = `[${timestamp}] ${message}`;

        this.logContainer.prepend(newLine);

        if (this.logContainer.children.length > this.maxLines) {
            this.logContainer.lastChild.remove();
        }
    }
}
