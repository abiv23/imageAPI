/**
 * Represents an image with quality properties.
 */
export class Image {
    constructor(
        public id: number,
        public sharpness: number, // 0 to 100 where 0 is blurry and 100 is sharp
        public exposure: number, // 0 to 100 where 0 is too dark and 100 is too bright
        public contrast: number // 0 to 100 where 0 is low contrast and 100 is good contrast
    ) {}
}