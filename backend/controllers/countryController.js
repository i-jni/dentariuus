
import { getcountryById, getcountrys } from "../repositories/countrysRepo.js";


const countrys = (req, res) => {
    getcountrys().then( data => {
        return res.status(200).json({
            status: 200,
            message: "OK",
            data: data,
        });
    });
};


const getcountry = (req, res) => {
    const countryId = req.params.id;

    getcountryById(countryId)
        .then(country => {
            if (!country) {
                return res.status(404).json({
                    status: 404,
                    message: "country not found!!",
                });
            }

            return res.status(200).json({
                status: 200,
                message: "OK",
                data: country,
            });
        })
        .catch(error => {
            return res.status(500).json({
                status: 500,
                message: "Internal Server Error",
                error: error.message,
            });
        });
};

export { countrys, getcountry };

