const { successResponse } = require("../helpers/methods")

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.repositories = async (req, res) => {
    res.send(
        successResponse("list of repos", {
            data: [
                {
                    "name": "POC MFE Container",
                    "url": "https://github.com/sushilshinde/poc-mfe-container/"
                },
                {
                    "name": "POC MFE Header Footer",
                    "url": "https://github.com/sushilshinde/poc-mfe-header-footer/"
                },
                {
                    "name": "POC MFE Top Repos",
                    "url": "https://github.com/sushilshinde/poc-mfe-top-repos/"
                },
                {
                    "name": "POC MFE Activities",
                    "url": "https://github.com/sushilshinde/poc-mfe-activities/"
                }
            ]
        })
    )
}