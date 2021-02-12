/**
 * @param arg
 * @returns true if the argument is a valid UUID or false if it's not
 */
function validator(arg: string): boolean{
	return /([0-9A-F]{8})-([0-9A-F]{4})-([0-9A-F]{4})-([0-9A-F]{4})-([0-9A-F]{12})/i.test(arg);
}
export { validator };
