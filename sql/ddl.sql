create database infoapsicotec;
use infoapsicotec;

CREATE TABLE TB_ADMINISTRADOR(
ID_ADMINISTRADOR   INT PRIMARY KEY auto_increment,
NM_USUARIO 			VARCHAR(200),
DS_SENHA        	VARCHAR(40),
DS_LOGIN			VARCHAR(40),
DS_EMAIL            VARCHAR(100),
IMG_PERFIL			VARCHAR(800),
DT_NASCIMENTO   	DATE
);

CREATE TABLE TB_CONSULTA(
ID_CONSULTA 		INT PRIMARY KEY auto_increment,
ID_ADMINISTRADOR    INT,
NM_PACIENTE			VARCHAR(300),
NM_PAI				VARCHAR(300),
NM_MAE				VARCHAR(300),
DT_NASCIMENTO		DATE,
HR_HORA				TIME,
DT_CONSULTA			DATE,
DS_GENERO			VARCHAR(15),
DS_DESCRICAO		VARCHAR(3000),
DS_CONCLUSAO		VARCHAR(3000),
foreign key(ID_ADMINISTRADOR) references TB_ADMINISTRADOR (ID_ADMINISTRADOR)
);

CREATE TABLE tb_emails(
    ID_EMAIL        INT PRIMARY KEY AUTO_INCREMENT,
    NM_AUTOR        VARCHAR(200),
    DS_OPINIAO      VARCHAR(3000),
    DT_ENVIO        DATE
)