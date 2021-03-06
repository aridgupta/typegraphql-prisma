import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { PostCreateOrConnectWithouteditorInput } from "../inputs/PostCreateOrConnectWithouteditorInput";
import { PostCreateWithoutEditorInput } from "../inputs/PostCreateWithoutEditorInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PostCreateManyWithoutEditorInput {
  @TypeGraphQL.Field(_type => [PostCreateWithoutEditorInput], {
    nullable: true,
    description: undefined
  })
  create?: PostCreateWithoutEditorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCreateOrConnectWithouteditorInput], {
    nullable: true,
    description: undefined
  })
  connectOrCreate?: PostCreateOrConnectWithouteditorInput[] | undefined;
}
