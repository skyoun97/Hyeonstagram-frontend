import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import {
  REQUEST_SECRET,
  CREATE_ACCOUNT,
  CONFIRM_SECRET,
  LOG_IN,
} from "./AuthQueries";
import { toast } from "react-toastify";

export default () => {
  const [action, setAction] = useState("logIn");
  const [btnDisalbed, setBtnDisalbed] = useState(false);
  const username = useInput("");
  const firstName = useInput("");
  const lastName = useInput("");
  const secret = useInput("");
  const email = useInput("");

  const [requestSecretMutation] = useMutation(REQUEST_SECRET, {
    variables: { email: email.value },
  });
  const [createAccountMutation] = useMutation(CREATE_ACCOUNT, {
    variables: {
      email: email.value,
      username: username.value,
      firstName: firstName.value,
      lastName: lastName.value,
    },
  });
  const [confirmSecretMutation] = useMutation(CONFIRM_SECRET, {
    variables: {
      email: email.value,
      secret: secret.value,
    },
  });
  const [localLogInMutation] = useMutation(LOG_IN);

  const onSummit = async (e) => {
    e.preventDefault();
    setBtnDisalbed(true);

    if (action === "logIn") {
      if (email.value === "") {
        toast.error("이메일 주소를 입력해 주세요.");
      } else {
        try {
          const {
            data: { requestSecret },
          } = await requestSecretMutation();
          if (!requestSecret) {
            toast.error(
              "계정이 존재하지 않습니다. 회원가입을 해주세요."
            );
          } else {
            toast.success("메일함에서 로그인 코드를 확인하세요!");
            setAction("confirm");
          }
        } catch {
          toast.error(
            "요청을 완료할 수 없습니다. 다시 시도해주세요."
          );
        }
      }
    } else if (action === "signUp") {
      if (
        email.value === "" ||
        username.value === "" ||
        firstName.value === "" ||
        lastName.value === ""
      ) {
        toast.error("모든 빈칸을 채워주세요.");
      } else {
        try {
          const {
            data: { createAccount },
          } = await createAccountMutation();
          if (!createAccount) {
            toast.error("계정을 생성하지 못했습니다!");
          } else {
            toast.success(
              "계정을 성공적으로 생성하였습니다! 이제 로그인을 할 수 있습니다."
            );
            setTimeout(() => setAction("logIn"), 1200);
          }
        } catch (err) {
          toast.error(err + "");
        }
      }
    } else if (action === "confirm") {
      if (secret.value === "") {
        toast.error("로그인 시크릿을 입력해주세요.");
      } else {
        try {
          const {
            data: { confirmSecret: token },
          } = await confirmSecretMutation();
          if (!token) {
            throw Error("Secret code가 일치하지 않습니다.");
          } else {
            await localLogInMutation({
              variables: { token },
            });
          }
        } catch (err) {
          toast.error("문제가 발생했습니다." + err);
        }
      }
    }
    setBtnDisalbed(false);
  };

  return (
    <AuthPresenter
      setAction={setAction}
      action={action}
      username={username}
      firstName={firstName}
      lastName={lastName}
      email={email}
      secret={secret}
      onSummit={onSummit}
      btnDisalbed={btnDisalbed}
    />
  );
};

/*
Some Test
*/
