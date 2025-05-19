import { GoogleGenAI, GoogleGenAIOptions, GenerateContentResponse } from '@google/genai';

class OpenAIClass {
    private API_KEY = 'secreto';

    private _clientOptions: GoogleGenAIOptions = {
        apiKey: this.API_KEY,
    };

    private _instance: GoogleGenAI;

    constructor() {
        this._instance = new GoogleGenAI(this._clientOptions);
    }

    public async getResponse(prompt: string): Promise<GenerateContentResponse> {
        const response = await this._instance.models.generateContent({
            model: 'gemini-2.0-flash',
            contents: prompt,
        });

        console.log(response);

        return response;
    }
}

export default OpenAIClass;
