/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsUUID, Length } from "class-validator";

export class CreateNotificationBody {
  @IsNotEmpty({
    message: "O envio do recipientId é obrigatório",
  })
  @IsUUID()
  recipientId: string;

  @IsNotEmpty({
    message: "O envio do conteúdo é obrigatório",
  })
  @Length(5, 240)
  content: string;

  @IsNotEmpty({
    message: "O envio da categoria é obrigatório",
  })
  category: string;
}
