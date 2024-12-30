interface Res<T> {
	data: T;
}

export type PromiseFormatRes<T> = Promise<Res<T>>;
