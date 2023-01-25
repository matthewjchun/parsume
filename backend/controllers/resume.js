// @desc    get Resumes
// @route   GET /resume
const getResume = async (req, res) => {
    res.json({ message: "Hello World" })
}

// @desc    set Resumes
// @route   POST /resume
const setResume = async (req, res) => {
    res.json({ message: "Created a World" })
}

// @desc    update Resumes
// @route   PUT /resume/:id
const updateResume = async (req, res) => {
    res.json({ message: `Updated World #${req.params.id}`})
}

// @desc    delete Resumes
// @route   DELETE /resume/:id
const deleteResume = async (req, res) => {
    res.json({ message: `Deleted World #${req.params.id}`})
}

module.exports = {
    getResume,
    setResume,
    updateResume,
    deleteResume
}