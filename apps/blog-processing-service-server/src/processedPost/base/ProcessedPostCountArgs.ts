/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProcessedPostWhereInput } from "./ProcessedPostWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class ProcessedPostCountArgs {
  @ApiProperty({
    required: false,
    type: () => ProcessedPostWhereInput,
  })
  @Field(() => ProcessedPostWhereInput, { nullable: true })
  @Type(() => ProcessedPostWhereInput)
  where?: ProcessedPostWhereInput;
}

export { ProcessedPostCountArgs as ProcessedPostCountArgs };