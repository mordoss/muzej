function createSlug(input: string): string {
     const slug = input.trim().toLowerCase().replace(/\s+/g, '-');
    return slug;
}

export {
    createSlug
}