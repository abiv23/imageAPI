import { Image } from './Image';
import { ImageGenerator } from './ImageGenerator';

interface ImageFeedbackConfig {
    feedbackText: {
        blurry: string;
        tooBright: string;
        tooDark: string;
        lowContrast: string;
        ok: string;
    };
    feedbackDuration: number;
}

const defaultConfig: ImageFeedbackConfig = {
    feedbackText: {
        blurry: "blurry",
        tooBright: "too bright",
        tooDark: "too dark",
        lowContrast: "low contrast",
        ok: "ok"
    },
    feedbackDuration: 2000
};

export class ImageController {
    private imageGenerator: ImageGenerator;
    private config: ImageFeedbackConfig;
    private isBusy = false;
    private latestImage: Image | null = null;

    constructor(config: Partial<ImageFeedbackConfig> = {}) {
        this.imageGenerator = new ImageGenerator();
        this.config = { ...defaultConfig, ...config };
        this.imageGenerator.setImageListener((image) => this.processImage(image));
    }

    public start(): void {
        this.imageGenerator.start();
    }

    public stop(): void {
        this.imageGenerator.stop();
        this.isBusy = false;
        this.latestImage = null;
        this.clearFeedback();
    }

    public processImage(image: Image): void {
        this.latestImage = image;
        if (this.isBusy) return;

        this.isBusy = true;
        setTimeout(() => {
            if (this.latestImage !== null) {
                const feedback = this.evaluateImageQuality(this.latestImage);
                this.displayFeedback(feedback);
            }
            this.isBusy = false;
            if (this.latestImage !== null && this.latestImage !== image) {
                this.processImage(this.latestImage);
            }
        }, 500);
    }

    private displayFeedback(feedback: string): void {
        const display = document.getElementById("feedback-display");
        if (display) {
            display.textContent = feedback;
            setTimeout(() => {
                if (display.textContent === feedback) {
                    display.textContent = "";
                }
            }, this.config.feedbackDuration);
        }
    }

    private clearFeedback(): void {
        const display = document.getElementById("feedback-display");
        if (display) display.textContent = "";
    }

    public evaluateImageQuality(image: Image): string {
        const text = this.config.feedbackText;
        if (image.sharpness < 50) return text.blurry;
        if (image.exposure >= 75) return text.tooBright;
        if (image.exposure <= 25) return text.tooDark;
        if (image.contrast < 50) return text.lowContrast;
        return text.ok;
    }
}