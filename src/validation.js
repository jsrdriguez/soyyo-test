const yup = require("yup");

const PostFilterSchema = yup.object({
    body: yup.object({
        startId: yup.number().min(1).max(20).required(),
        endId: yup.number().min(1).max(20).required().when('startId', (startId, schema) => {
            return schema.test({
                test: endId => !!startId && endId >= startId,
            })
        }),
    }),
});

const validate = (schema) => async (req, res, next) => {
    try {
        await schema.validate({
            body: req.body,
            query: req.query,
            params: req.params,
        });
        return next();
    } catch (err) {
        return res.status(400).json({ 
            message: "Error en validación datos de entrada" 
        });
    }
  };

exports.validate = validate
exports.schema = PostFilterSchema