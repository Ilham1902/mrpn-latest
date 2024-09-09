import {ManagementRoleDto, ManagementRoleReqDto} from "@/app/manajemen-role/pageModel";
import {FormControl, Grid, TextField} from "@mui/material";
import FieldLabelInfo from "@/components/fieldLabelInfo";
import React, {SetStateAction} from "react";
import {AutocompleteSelectSingle} from "@/components/autocomplete";
import {ManagementUserDataDto, ManagementUserStateDto} from "@/app/manajemen-user/pageModel";

export default function FormUser(
  {
    roleData,
    request,
    setRequest
  } : {
    roleData:ManagementRoleDto[]
    request:ManagementUserStateDto
    setRequest:(value:(SetStateAction<ManagementUserStateDto>)) => void
  }
){

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <FieldLabelInfo title="Tipe User" information="Tipe User"/>
          <AutocompleteSelectSingle
            key={request.id}
            value={request.type}
            options={["BAPPENAS", "NON BAPPENAS"]}
            getOptionLabel={(opt) => opt}
            handleChange={(e:string) => setRequest(prevState => {
              return {
                ...prevState,
                type:e
              }
            })}
            placeHolder={"Pilih tipe user"}
          />
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          {request.type == "BAPPENAS" ? null : (
            <>
              <FieldLabelInfo title="Password" information="Password"/>
              <TextField
                variant="outlined"
                size="small"
                placeholder="Password"
                InputLabelProps={{
                  shrink: true,
                }}
                value={request.password}
                onChange={(e) => setRequest(prevState => {
                  return {
                    ...prevState,
                    password:e.target.value
                  }
                })}
              />
            </>
          )}
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <FieldLabelInfo title="Nama User" information="Nama User"/>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Nama User"
            InputLabelProps={{
              shrink: true,
            }}
            value={request.name}
            onChange={(e) => setRequest(prevState => {
              return {
                ...prevState,
                name:e.target.value
              }
            })}
          />
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <FieldLabelInfo title="Email" information="Email"/>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Email"
            InputLabelProps={{
              shrink: true,
            }}
            value={request.email}
            onChange={(e) => setRequest(prevState => {
              return {
                ...prevState,
                email:e.target.value
              }
            })}
          />
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <FieldLabelInfo title="Role User" information="Role User"/>
          <AutocompleteSelectSingle
            key={request.id}
            value={request.role_id}
            options={roleData}
            getOptionLabel={(opt) => opt.name}
            handleChange={(e:ManagementRoleDto) => setRequest(prevState => {
              return {
                ...prevState,
                role_id:e
              }
            })}
            placeHolder={"Pilih Role User"}
          />
        </FormControl>
      </Grid>
    </Grid>
  )

}