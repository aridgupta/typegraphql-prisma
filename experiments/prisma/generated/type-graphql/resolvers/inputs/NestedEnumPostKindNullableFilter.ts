import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { PostKind } from "../../enums/PostKind";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class NestedEnumPostKindNullableFilter {
  @TypeGraphQL.Field(_type => PostKind, {
    nullable: true,
    description: undefined
  })
  equals?: "BLOG" | "ADVERT" | undefined;

  @TypeGraphQL.Field(_type => [PostKind], {
    nullable: true,
    description: undefined
  })
  in?: Array<"BLOG" | "ADVERT"> | undefined;

  @TypeGraphQL.Field(_type => [PostKind], {
    nullable: true,
    description: undefined
  })
  notIn?: Array<"BLOG" | "ADVERT"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumPostKindNullableFilter, {
    nullable: true,
    description: undefined
  })
  not?: NestedEnumPostKindNullableFilter | undefined;
}
