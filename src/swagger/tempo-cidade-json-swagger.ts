import { ApiProperty } from "@nestjs/swagger"

export class TempoCidadeJsonTxt {

        @ApiProperty()
        cidade: string
        
        @ApiProperty()
        tempo: string
        
        @ApiProperty()
        temperaturaMedia: number
        
        @ApiProperty()
        maxima: number
        
        @ApiProperty()
        minima: number
        
        @ApiProperty()
        sensacao: number
}