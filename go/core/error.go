package core

type AgifyioError struct {
	IsAgifyioError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewAgifyioError(code string, msg string, ctx *Context) *AgifyioError {
	return &AgifyioError{
		IsAgifyioError: true,
		Sdk:              "Agifyio",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *AgifyioError) Error() string {
	return e.Msg
}
