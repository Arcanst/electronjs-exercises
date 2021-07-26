import { Product } from './product.model';
import { Config } from './config.model';
/// must be lazy loaded
/// config file's content must by always in sync with the in-memory version

export class ConfigService {
    private config: Config;

    public getAllProducts(): Product[] {
        if(!this.config) {
            this.readConfigFile();
        }

        return this.config.products;
    }

    private readConfigFile(): void {
        this.config = {
            products: [
                {
                    id: "game1Id",
                    name: "Game 1",
                    checksum: "qweqweqwe",
                    downloadedBinariesPath: "%APPDATA%/Local/Sagger/download",
                    executablePath: "%APPDATA%/Local/Sagger/download",
                },
            ],
        };
    }
}