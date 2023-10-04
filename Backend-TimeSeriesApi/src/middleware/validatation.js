const {checkSchema,validationResult} = require('express-validator');

let conditions = {
	variable1 : {
		exists:{
			errorMessage: 'time series must required'
		},
		trim:true,
		notEmpty:{
			errorMessage: 'time series should not be empty.',
		},
        isNumeric:{
            errorMessage: 'Value should be number.',
        }
	},
    variable2 : {
		exists:{
			errorMessage: 'time series must required'
		},
		trim:true,
		notEmpty:{
			errorMessage: 'time series should not be empty.',
		},
        isNumeric:{
            errorMessage: 'Value should be number.',
        }
	},
    variable3 : {
		exists:{
			errorMessage: 'time series must required'
		},
		trim:true,
		notEmpty:{
			errorMessage: 'time series should not be empty.',
		},
        isNumeric:{
            errorMessage: 'Value should be number.',
        }
	},
    variable4 : {
		exists:{
			errorMessage: 'time series must required'
		},
		trim:true,
		notEmpty:{
			errorMessage: 'time series should not be empty.',
		},
        isNumeric:{
            errorMessage: 'Value should be number.',
        }
	},
    variable5 : {
		exists:{
			errorMessage: 'time series must required'
		},
		trim:true,
		notEmpty:{
			errorMessage: 'time series should not be empty.',
		},
        isNumeric:{
            errorMessage: 'Value should be number.',
        }
	},
    variable6 : {
		exists:{
			errorMessage: 'time series must required'
		},
		trim:true,
		notEmpty:{
			errorMessage: 'time series should not be empty.',
		},
        isNumeric:{
            errorMessage: 'Value should be number.',
        }
	},
    variable7 : {
		exists:{
			errorMessage: 'time series must required'
		},
		trim:true,
		notEmpty:{
			errorMessage: 'time series should not be empty.',
		},
        isNumeric:{
            errorMessage: 'Value should be number.',
        }
	},
    variable8 : {
		exists:{
			errorMessage: 'time series must required'
		},
		trim:true,
		notEmpty:{
			errorMessage: 'time series should not be empty.',
		},
        isNumeric:{
            errorMessage: 'Value should be number.',
        }
	},
    variable9 : {
		exists:{
			errorMessage: 'time series must required'
		},
		trim:true,
		notEmpty:{
			errorMessage: 'time series should not be empty.',
		},
        isNumeric:{
            errorMessage: 'Value should be number.',
        }
	},
    variable10 : {
		exists:{
			errorMessage: 'time series must required'
		},
		trim:true,
		notEmpty:{
			errorMessage: 'time series should not be empty.',
		},
        isNumeric:{
            errorMessage: 'Value should be number.',
        }
	}
};

const validateSchema = async (req, res, next, schema) => {
	await checkSchema(schema).run(req);
	const errorFormatter = ({ location, msg, param, value, nestedErrors }) => {
		return `${msg}`;
		// return {"param": param,"value": value,"msg": msg};
	};
	
	const errors = await validationResult(req).formatWith(errorFormatter);
    if (errors.isEmpty())
    	next();
    else{
    	var msg = errors.array({ onlyFirstError: true }).join(', ');
		res.status(400).json({status:400,msg:msg,data:null});
    }
}

/**
* This Function that Verify follow time series.
*/

const valTimeSeries = (req, res, next) => {
	const schema = {
		variable1:conditions.variable1,
        variable1:conditions.variable2,
        variable1:conditions.variable3,
        variable1:conditions.variable4,
        variable1:conditions.variable5,
        variable1:conditions.variable6,
        variable1:conditions.variable7,
        variable1:conditions.variable8,
        variable1:conditions.variable9,
        variable1:conditions.variable10
        
	}
	validateSchema(req, res, next,schema);
};


module.exports = valTimeSeries;