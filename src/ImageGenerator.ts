import { Image } from './Image';

export class ImageGenerator {
    private intervalId: NodeJS.Timeout | null = null;
    private onImageGenerated: ((image: Image) => void) | null = null;

    public setImageListener(listener: (image: Image) => void): void {
        this.onImageGenerated = listener;
    }

    public start(interval: number = 200): void {
        if (this.intervalId) return;
        this.intervalId = setInterval(() => {
            const image = this.generateImage();
            if (this.onImageGenerated) {
                this.onImageGenerated(image);
            }
        }, interval);
    }

    public stop(): void {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    private generateImage(): Image {
        const sharpness = Math.random() * 100;
        const exposure = Math.random() * 100;
        const contrast = Math.random() * 100;
        const id = Date.now();
        return new Image(id, sharpness, exposure, contrast);
    }
}