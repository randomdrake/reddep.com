export type TierId = "advisory" | "technical" | "executive";
export type Duration = 30 | 60;

export interface PriceTier {
  id: TierId;
  name: string;
  description: string;
  price30: number;
  price60: number;
  popular?: boolean;
  image: string;
  imageAlt: string;
}
