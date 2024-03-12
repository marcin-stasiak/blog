import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  constructor() {
    super();
  }

  public getRequest(context: ExecutionContext) {
    // console.log(context);
    const ctx = GqlExecutionContext.create(context);
    // console.log(ctx);
    const request = ctx.getContext();
    // console.log(request);
    request.body = ctx.getArgs()?.loginInput;
    // console.log(request);
    return request;
  }
}
