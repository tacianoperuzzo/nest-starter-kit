export abstract class Mapper<I, O> {
  abstract mapFrom(param: I): Promise<O>;
  abstract mapTo(param: O): I;
}
