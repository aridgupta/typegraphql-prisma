import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { CreatorCreateWithoutProblemsInput } from "../inputs/CreatorCreateWithoutProblemsInput";
import { CreatorUpdateWithoutProblemsInput } from "../inputs/CreatorUpdateWithoutProblemsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CreatorUpsertWithoutProblemsInput {
  @TypeGraphQL.Field(_type => CreatorUpdateWithoutProblemsInput, {
    nullable: false,
    description: undefined
  })
  update!: CreatorUpdateWithoutProblemsInput;

  @TypeGraphQL.Field(_type => CreatorCreateWithoutProblemsInput, {
    nullable: false,
    description: undefined
  })
  create!: CreatorCreateWithoutProblemsInput;
}
