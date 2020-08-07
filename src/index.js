import {Excel} from '@/components/excel/Excel.js'
import {Header} from '@/components/header/Header'
import {Toolbar} from '@/components/toolbar/Toolbar'
import {Formula} from '@/components/formala/formula'
import {Table} from '@/components/table/Table'
import './scss/index.scss'


const excel = new Excel('#app', {
  components: [Header, Toolbar, Formula, Table]
})

excel.render()
