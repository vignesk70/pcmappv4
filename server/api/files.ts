export default defineEventHandler(async (event) => {

	// const { files } = await readBody{ files: File[] }(event)
    const body = await readBody(event)
    // console.log(body.files)
	const fileNames: string[] = []
	for (const file of body.files) {
		fileNames.push(await storeFileLocally(file, 12, '/uploads'))
	}
	return fileNames
});

interface File {
	name: string
	content: string
	size: string
	type: string
	lastModified: string
}
