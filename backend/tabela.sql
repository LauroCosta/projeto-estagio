CREATE TABLE `mm_paciente` (


   `COD_SEQ_USU` VARCHAR(10), = paciente_id
   `CARTAO_SUS` VARCHAR(15), = paciente_sus
   `SAIDA_PRON` VARCHAR(1), = paciente_location
   - `NM_ATU` VARCHAR(70), = paciente_name
   paciente_name_social
   - `DT_NASC` DATETIME, swab  = paciente_date_birth
   `NATURAL_MUNIC` VARCHAR(7), = paciente_naturalness
   `NATURAL_UF` VARCHAR(2), = paciente_natutalness_uf
   - `SEXO` VARCHAR(1), = paciente_gender
   - `CPF` VARCHAR(11),  = paciente_cpf
   `NACIONAL_USU` VARCHAR(3),  = paciente_nationality
   `NM_PAI_ATU` VARCHAR(40), = paciente_pai
   - `NM_MAE_ATU` VARCHAR(40),= paciente_mae
   `PROFISSAO` VARCHAR(6), = paciente_profession
   `R_ENDERECO` VARCHAR(40), = paciente_address
   `R_NUMERO` VARCHAR(7),  = paciente_address_number
   `R_COMPL` VARCHAR(15),  = paciente_address_complement

pegar app_neighborhood
   `R_COD_BAIR` VARCHAR(3),  = neighborhood_id

   `R_PT_REF` VARCHAR(30),  = paciente_address_reference
   `R_TELEFONE` VARCHAR(25),  = paciente_address_telephone & telephone2

pegar app_logradouro
   `R_CEP` VARCHAR(8),  = paciente_cep

   `R_CIDADE` VARCHAR(7), puxa da tabela cep
   `R_ESTADO` VARCHAR(2), puxa da tabela cep
   `DT_CADAST` DATETIME,  = paciente_date e paciente_date_user
   `OBS1` VARCHAR(40),  = paciente_note
   `DT_OPERACAO_USU` DATETIME, = paciente_refresh_date e paciente_refresh_user
);
