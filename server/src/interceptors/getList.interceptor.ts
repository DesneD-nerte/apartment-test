import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable, tap } from 'rxjs';

@Injectable()
export class GetListInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const res = context.switchToHttp().getResponse();
    return next.handle().pipe(
      map((data) => {
        res.setHeader('Content-Range', data.length);
        return data;
      }),
    );
  }
}
