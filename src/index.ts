/**
 * @param arg
 * @returns true if the argument is a valid UUID or false if it's not
 */
function validator(arg: string): boolean{
	return /([0-9A-Z]{8})-([0-9A-Z]{4})-([0-9A-Z]{4})-([0-9A-Z]{4})-([0-9A-Z]{12})/i.test(arg);
}
export { validator };