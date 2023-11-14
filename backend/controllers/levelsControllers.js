
import { getLevelById, getLevels } from "../repositories/levelsRepo.js";


const levels = (req, res) => {
    getLevels().then( data => {
        return res.status(200).json({
            status: 200,
            message: "OK",
            data: data,
        });
    });
};


const getLevel = (req, res) => {
    const levelId = req.params.id;

    getLevelById(levelId)
        .then(level => {
            if (!level) {
                return res.status(404).json({
                    status: 404,
                    message: "level not found!!",
                });
            }

            return res.status(200).json({
                status: 200,
                message: "OK",
                data: level,
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

export { levels, getLevel };

