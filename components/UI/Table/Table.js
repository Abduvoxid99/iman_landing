import React from 'react'
import { Container } from '@material-ui/core'
import { useTranslation } from 'next-i18next'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import cls from './Table.module.scss'
const StyledTableCell = withStyles((theme) => ({
  body: {
    fontSize: 14,
  },
}))(TableCell)

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(even)': {
      backgroundColor: '#e4fcfc',
    },
  },
}))(TableRow)

function createData(name, calories, fat, carbs, protein, text1, text2, text3) {
  return { name, calories, fat, carbs, protein, text1, text2, text3 }
}

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  // container: {
  //   borderRadius: '16px!important',
  // },
})

export default function Tables() {
  const { t } = useTranslation('common')
  const rows = [
    createData(
      t('Profitability'),
      t('high'),
      t('medium'),
      t('medium'),
      t('high'),
      t('high'),
      t('high'),
      t('Absent')
    ),
    createData(
      t('Risk'),
      t('Low'),
      t('Low'),
      t('Medium'),
      t('Medium'),
      t('High'),
      t('High'),
      t('Low')
    ),
    createData(
      t('Islamic Finance compliance'),
      t('Yes'),
      t('No'),
      t('Yes'),
      t('Partial'),
      t('Partial'),
      t('Yes'),
      t('Yes')
    ),
    createData(
      t('Exit threshold'),
      t('Low'),
      t('Low'),
      t('High'),
      t('Low'),
      t('Low'),
      t('Medium'),
      t('Low')
    ),
    createData(
      t('Monthly income'),
      t('Yes'),
      t('Yes'),
      t('Yes'),
      t('No'),
      t('No'),
      t('Yes'),
      t('No')
    ),
    createData(
      t('Diversification'),
      t('high'),
      t('low'),
      t('low'),
      t('high'),
      t('low'),
      t('low'),
      t('Absent')
    ),
    createData(
      t('Early exit'),
      t('Yes'),
      t('Yes'),
      t('No'),
      t('Yes'),
      t('Yes'),
      t('No'),
      t('Yes')
    ),
  ]
  const classes = useStyles()

  return (
    <div className={cls.table}>
      <Container>
        <TableContainer className={classes.container} component={Paper}>
          <Table className={classes.table} aria-label='customized table'>
            <TableHead>
              <TableRow>
                <StyledTableCell className={cls.tableCell}></StyledTableCell>
                <StyledTableCell className={cls.tableCell} align='center'>
                  IMAN
                </StyledTableCell>
                <StyledTableCell className={cls.tableCell} align='center'>
                  {t('Bank deposit')}
                </StyledTableCell>
                <StyledTableCell className={cls.tableCell} align='center'>
                  {t('Car / real estate rental1')}
                </StyledTableCell>
                <StyledTableCell className={cls.tableCell} align='center'>
                  {t('ETF / S&P 500')}
                </StyledTableCell>
                <StyledTableCell className={cls.tableCell} align='center'>
                  {t('INDIVIDUAL FOREIGN SHARES')}
                </StyledTableCell>
                <StyledTableCell className={cls.tableCell} align='center'>
                  {t('small_buisness')}
                </StyledTableCell>
                <StyledTableCell className={cls.tableCell} align='center'>
                  {t('mattres')}
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody className={cls.tableRow}>
              {rows.map((row) => (
                <TableRow className={cls.tableRows} key={row.name}>
                  <StyledTableCell className={cls.tableCol}>
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell className={cls.tableCol} align='center'>
                    {row.calories}
                  </StyledTableCell>
                  <StyledTableCell className={cls.tableCol} align='center'>
                    {row.fat}
                  </StyledTableCell>
                  <StyledTableCell className={cls.tableCol} align='center'>
                    {row.carbs}
                  </StyledTableCell>
                  <StyledTableCell className={cls.tableCol} align='center'>
                    {row.protein}
                  </StyledTableCell>
                  <StyledTableCell className={cls.tableCol} align='center'>
                    {row.text1}
                  </StyledTableCell>
                  <StyledTableCell className={cls.tableCol} align='center'>
                    {row.text2}
                  </StyledTableCell>
                  <StyledTableCell className={cls.tableCol} align='center'>
                    {row.text3}
                  </StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  )
}
